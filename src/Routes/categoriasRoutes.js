import { Router } from "express";

const catRouter = Router();

catRouter.get("/categories", listarCategorias)
catRouter.post("/categories", inserirCategoria)

export default catRouter