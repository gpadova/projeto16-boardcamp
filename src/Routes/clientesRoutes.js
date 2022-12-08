import { Router } from "express";

const clienteRoute = Router();

clienteRoute.get("/customer", listarClientes)
clienteRoute.get("/customer/:id", listarClientePorId)
clienteRoute.patch("/customer/:id", atualizarCliente)
clienteRoute.post("/customer", inserircliente)

export default clienteRoute