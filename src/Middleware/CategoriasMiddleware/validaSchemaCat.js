import { categoriaSchema } from "../../Schema/categoriasSchema";

export default function validaCatSchema(req, res, next){
    const novaCategoria = req.body;
    const validation = categoriaSchema.validate(novaCategoria, {abortEarly: false})
    if(validation.error){
        const erros = validation.error.details.map(det => det.message);
        return res.status(422).send(erros)
    }
    res.locals.novaCategoria = novaCategoria
    next()
}