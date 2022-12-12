import { Router } from "express";
import listarAlugueis from "../Controllers/alugueisControllers/listarAlugueisController.js";
import inserirAluguel from "../Controllers/alugueisControllers/inserirAluguelController.js";
import verificaExistencia from "../Middleware/AlugueisMiddleware/verificaExistencia.js";
import finalizarAluguel from "../Controllers/alugueisControllers/finalizarAluguelController.js";
import verificaIdESeFinalizado from "../Middleware/AlugueisMiddleware/verificaIdEFinalizado.js";
import verificaId from "../Middleware/AlugueisMiddleware/verificaId.js";
import apagarAluguel from "../Controllers/alugueisControllers/apagarAluguelController.js";

const alugueisRoute = Router();

alugueisRoute.get("/rentals", listarAlugueis);
alugueisRoute.post("/rentals",  inserirAluguel);
alugueisRoute.post("/rentals/:id/return", verificaIdESeFinalizado, finalizarAluguel);
alugueisRoute.delete("/rentals/:id", verificaId, apagarAluguel);

export default alugueisRoute;