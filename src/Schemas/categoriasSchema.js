import joi from "joi"

export const categoriaSchema = joi.object({
    name: joi.string().required()
})