import { Router } from "express";
import listarClientePorId from "../Controllers/clientesControllers/listarClientePorIdController";
import listarClientes from "../Controllers/clientesControllers/listarClientesController";
import validaClienteSchema from "../Middleware/ClientesMiddleware/validateSchemaClientesMiddleware";
import verificaClienteExiste from "../Middleware/ClientesMiddleware/verificaClienteExiste";
import inserirCliente from "../Controllers/clientesControllers/inserirClienteController";
import atualizaCliente from "../Controllers/clientesControllers/atualizarClienteController";

const clienteRoute = Router();

clienteRoute.get("/customer", listarClientes);
clienteRoute.get("/customer/:id", listarClientePorId);
clienteRoute.put(
  "/customer/:id",
  validaClienteSchema,
  verificaClienteExiste,
  atualizaCliente
);
clienteRoute.post(
  "/customer",
  validaClienteSchema,
  verificaClienteExiste,
  inserirCliente
);

export default clienteRoute;
