import { Router } from "express";
import listarJogos from "../Controllers/jogosControllers/listarJogosController";
import inserirJogos from "../Controllers/jogosControllers/inserirJogosController";
import validaJogoSchema from "../Middleware/JogosMiddleware/validaSchema";

const jogosRoute = Router();

jogosRoute.get("/games", listarJogos)
jogosRoute.post("/games",validaJogoSchema, inserirJogos)

export default jogosRoute