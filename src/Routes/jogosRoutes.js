import { Router } from "express";
import listarJogos from "../Controllers/jogosControllers/listarJogosController.js";
import inserirJogos from "../Controllers/jogosControllers/inserirJogosController.js";
import validaJogoSchema from "../Middleware/JogosMiddleware/validaSchema.js";

const jogosRoute = Router();

jogosRoute.get("/games", listarJogos)
jogosRoute.post("/games", validaJogoSchema, inserirJogos)

export default jogosRoute