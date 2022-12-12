import { jogosSchema } from "../../Schemas/jogosSchema.js";

export default function validaJogoSchema(req, res, next){
    const novoJogo = req.body;
    const validation = jogosSchema.validate(novoJogo, {abortEarly: false})
    if(validation.error){
        const erros = validation.error.details.map(det => det.message);
        return res.status(422).send(erros)
    }
    res.locals.novoJogo = novoJogo
    next()
}