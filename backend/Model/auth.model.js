import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: String,
    verificationCodeExpiresAt: Date,
    resetPasswordCode: String,
    resetPasswordExpiresAt: Date,

}, { timestamps: true });

userSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.verificationCode;
        delete ret.verificationCodeExpiresAt;
        delete ret.resetPasswordCode;
        delete ret.resetPasswordExpiresAt;
        delete ret.__v;
        return ret;
    }
});

export const User = mongoose.model("User", userSchema);