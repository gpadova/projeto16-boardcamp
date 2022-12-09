import connection from "../../Db/database";

export default async function verificaSeExistente(req, res, next) {
  const categorias = await connection.query(
    `SELECT * FROM categories WHERE name=$1`,
    [novaCategoria.name]
  );
  if(categorias.rows.length !== 0){
    return res.sendStatus(500)
  }
  next()
}
