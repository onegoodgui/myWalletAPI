import express from 'express';
import { Login, signUp } from '../controllers/authController.js';
import { userSchemaValidationMiddleware } from '../middlewares/schemaValidationMiddleware.js';

const authRouter = express.Router();
authRouter.post('/auth/sign-up',userSchemaValidationMiddleware, signUp);
authRouter.post('/auth/login', Login);
export default authRouter;
