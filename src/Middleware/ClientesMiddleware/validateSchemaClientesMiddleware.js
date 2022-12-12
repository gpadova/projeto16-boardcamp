import { categoriaSchema } from "../../Schemas/categoriasSchema.js";

export default function validaClienteSchema(req, res, next){
    const novoCliente = req.body;
    const validation = categoriaSchema.validate(novoCliente, {abortEarly: false})
    if(validation.error){
        const erros = validation.error.details.map(det => det.message);
        return res.status(422).send(erros)
    }
    res.locals.novoCliente = novoCliente
    next()
}