import connection from "../../Db/database.js";

export default async function verificaClienteExiste(req, res, next) {
  const novoCliente = req.body.cpf
  const jogo = await connection.query(
    `SELECT * FROM customers WHERE cpf=$1`,
    [novoCliente]
  );
  if(jogo.rows.length !== 0){
    return res.sendStatus(409)
  }
  next()
}
