import userSchema from "../schemas/userSchema.js";
import earningExpenseSchema from "../schemas/earningExpenseSchema.js";

export function userSchemaValidationMiddleware(req, res, next) {
  const user = req.body;

  const validation = userSchema.validate(user);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}

export function earnExpsSchemaValidationMiddleware(req, res, next) {
  const obj = req.body;

  const validation = earningExpenseSchema.validate(obj);
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}