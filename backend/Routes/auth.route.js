import { getUsers, SignUp, VerifyEmail, getUser, Login, resendVerificationCode } from "../Controller/auth.controller.js";
import express from 'express'

const router = express.Router();

router.post('/signup', SignUp);
router.post('/verify-email', VerifyEmail);
router.post('/resend-code', resendVerificationCode);
router.post('/login', Login);
router.get('/get-users', getUsers);
router.get('/get-user/:id', getUser);

export default router;
