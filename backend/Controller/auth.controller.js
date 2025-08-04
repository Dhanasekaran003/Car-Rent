import { User } from "../Model/auth.model.js";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { sendVerificationEmail, welcomeEmail } from "../nodeMailer/email.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const SignUp = async (req, res) => {
    console.log("api is triggered")
    const { email, password, name, mobile, role } = req.body;
    if (!email || !password || !name | !mobile) {
        return res.status(400).json({
            success: true,
            message: "Missing required fields !"
        })
    }
    try {

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "User already exixt, try different email"
            })
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        const verificationCode = crypto.randomInt(100000, 1000000).toString();
        const verificationCodeExpiresAt = Date.now() + 60 * 60 * 1000;
        const userRole = role?.toLowerCase() === "admin" ? "admin" : "user";
        const newUser = new User({
            name,
            email,
            mobile,
            role: userRole,
            password: hashedPassword,
            verificationCode: verificationCode,
            verificationCodeExpiresAt: verificationCodeExpiresAt
        })

        await newUser.save();
        await sendVerificationEmail(email, verificationCode);
        console.log(email, verificationCode);

        res.status(200).json({
            success: true,
            response: newUser
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error please try again later"
        })
    }
}

export const VerifyEmail = async (req, res) => {
    console.log("Api is triggered")
    const { code } = req.body;
    console.log(code)
    try {
        const user = await User.findOne({
            verificationCode: code,
            verificationCodeExpiresAt: { $gt: Date.now() }
        })
        console.log(user);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or Expired Verification code"
            });
        };

        user.isVerified = true;
        await user.save();
        console.log(user);
        await welcomeEmail(user.email, user.name);
        res.status(200).json({
            success: true,
            message: "Email is verified"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        })
    }
}
export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Username or Password" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid Password" });
        }

        const token = await generateTokenAndSetCookie(res, user._id);
        await user.save();

        res.status(200).json({
            success: true,
            message: "Logged In Successfully",
            token: token,
            user: user
        });
    } catch (error) {
        console.error("Error in Login", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Users Found"
            });
        };
        res.status(200).json({
            success: true,
            count: users.length,
            users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        };
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
    }
}