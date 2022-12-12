import { Router } from "express";
import listarCategorias from "../Controllers/categoriasControllers/listarCategoriasController.js";
import verificaSeExistente from "../Middleware/CategoriasMiddleware/verificaSeExisteCat.js";
import inserirCategorias from "../Controllers/categoriasControllers/inserirCategoriasController.js";

const catRouter = Router();

catRouter.get("/categories", listarCategorias);
catRouter.post(
  "/categories",
  verificaSeExistente,
  inserirCategorias
);

export default catRouter;
