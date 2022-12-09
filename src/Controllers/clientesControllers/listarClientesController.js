import connection from "../../Db/database";

export default async function listarClientes(req, res) {
  const { cpf } = req.query;
  try {
    const clienteRequeridos = await connection.query(
      `SELECT * 
      FROM customers 
      WHERE cpf 
      LIKE '$1%' `
      ,[cpf]);
      res.send(clienteRequeridos).status(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
