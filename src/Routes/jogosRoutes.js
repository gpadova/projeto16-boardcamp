import { Router } from "express";

const jogosRoute = Router();

jogosRoute.get("/games", listarJogos)
jogosRoute.post("/games", inserirJogos)

export default jogosRoute