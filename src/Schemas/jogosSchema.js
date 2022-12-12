import joi from "joi"

export const jogosSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    stockTotal: joi.number().required().greater(1),
    pricePerDay: joi.number().required().greater(1),
    categoryId: joi.number().required()
})