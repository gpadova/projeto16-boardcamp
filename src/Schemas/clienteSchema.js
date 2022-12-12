import joi from "joi"

export const clienteSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string(),
    cpf: joi.number(),
    birthday: joi.string().required();
})