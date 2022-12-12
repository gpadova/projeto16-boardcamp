import { Router } from "express";
import listarClientePorId from "../Controllers/clientesControllers/listarClientePorIdController.js";
import listarClientes from "../Controllers/clientesControllers/listarClientesController.js";
import validaClienteSchema from "../Middleware/ClientesMiddleware/validateSchemaClientesMiddleware.js";
import verificaClienteExiste from "../Middleware/ClientesMiddleware/verificaClienteExiste.js";
import inserirCliente from "../Controllers/clientesControllers/inserirClienteController.js";
import atualizaCliente from "../Controllers/clientesControllers/atualizarClienteController.js";

const clienteRoute = Router();

clienteRoute.get("/customer", listarClientes);
clienteRoute.get("/customer/:id", listarClientePorId);
clienteRoute.put(
  "/customer/:id",
  // validaClienteSchema,
  verificaClienteExiste,
  atualizaCliente
);
clienteRoute.post(
  "/customer",
  // validaClienteSchema,
  verificaClienteExiste,
  inserirCliente
);

export default clienteRoute;
