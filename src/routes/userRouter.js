import express from "express";
import { verificaToken} from "../middlewares/tokenValidationMiddleware.js";
import { postEarning , getAllTransactions} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post('/mainpage/new_earning',verificaToken, postEarning);
userRouter.get('/mainpage/earnings',verificaToken, getAllTransactions);
export default userRouter;