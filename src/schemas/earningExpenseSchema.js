import joi from "joi";

const earningExpenseSchema = joi.object({
    description: joi.string().required(),
    value: joi.number().positive().required(),
    token: joi.object().required()
  });

  export default earningExpenseSchema;