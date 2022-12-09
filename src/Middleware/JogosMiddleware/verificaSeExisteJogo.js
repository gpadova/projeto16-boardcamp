import connection from "../../Db/database";

export default async function verificaSeExistenteJogo(req, res, next) {
  const jogo = await connection.query(
    `SELECT * FROM categories WHERE name=$1`,
    [novoJogo.name]
  );
  if(jogo.rows.length !== 0){
    return res.sendStatus(409)
  }
  next()
}
