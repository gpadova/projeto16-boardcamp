import { Router } from "express";

const alugueisRoute = Router();

alugueisRoute.get("/rentals", listarAlugueis)
alugueisRoute.post("/rentals", inserirAluguel)
alugueisRoute.post("/rentals/:id", finalizarAluguel)
alugueisRoute.delete("/rentals/:id", apagarAluguel)

export default alugueisRoute