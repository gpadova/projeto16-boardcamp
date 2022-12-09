import { Router } from "express";
import listarCategorias from "../Controllers/categoriasControllers/listarCategoriasController";
import validaSchema from "../Middleware/CategoriasMiddleware/validaSchema";
import verificaSeExistente from "../Middleware/CategoriasMiddleware/verificaSeExiste";

const catRouter = Router();

catRouter.get("/categories", listarCategorias);
catRouter.post(
  "/categories",
  validaSchema,
  verificaSeExistente,
  inserirCategoria
);

export default catRouter;
