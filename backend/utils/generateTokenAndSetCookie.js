import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const generateTokenAndSetCookie = async (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "10m"
    });
    console.log(process.env.JWT_SECRET);
    console.log( userId );
    console.log( res );
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        samesite: "Strict",
        maxAge: 10 * 60 * 1000
    });
    return token
}