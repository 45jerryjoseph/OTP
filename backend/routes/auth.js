import express from 'express';
import { login, register } from '../controllers/auth.js';
import verifyEmail from '../verifyUserOtp.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',verifyEmail,login);

export default router