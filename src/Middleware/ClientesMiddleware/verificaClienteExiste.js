import connection from "../../Db/database";

export default async function verificaClienteExiste(req, res, next) {
  const jogo = await connection.query(
    `SELECT * FROM cliente WHERE name=$1`,
    [novoCliente.cpf]
  );
  if(jogo.rows.length !== 0){
    return res.sendStatus(409)
  }
  next()
}
