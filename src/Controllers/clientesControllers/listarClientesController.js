import connection from "../../Db/database.js";

export default async function listarClientes(req, res) {
  const { cpf } = req.query;
  let clienteRequeridos = [];
  try {
    if (cpf !== undefined) {
      clienteRequeridos = await connection.query(
        `SELECT * 
      FROM customers 
      WHERE cpf 
      LIKE '$1%'`,
        [cpf]
      );
    } else {
      clienteRequeridos = await connection.query(
        `SELECT * 
        FROM customers`
      );
    }
    res.send(clienteRequeridos.rows).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
