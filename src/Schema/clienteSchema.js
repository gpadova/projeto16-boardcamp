import joi from "joi"

export const clienteSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().required().min(10).max(11),
    cpf: joi.number().required().equal(11),
    birthday: joi.date().format('YYYY-MM-DD');
})