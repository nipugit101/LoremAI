import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller.js';
const router = Router();

router.post(
  '/register',
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters'),
  userController.createUserController // ✅ Must be a function
);

router.post(
    '/login',
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters'),
    userController.loginUserController
)

export default router;
