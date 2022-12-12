import connection from "../../Db/database.js";

export default async function verificaSeExistente(req, res, next) {
  const novaCategoria = req.body
  const categorias = await connection.query(
    `SELECT * FROM categories WHERE name=$1`,
    [novaCategoria.name]
  );
  if(categorias.rows.length !== 0){
    return res.sendStatus(500)
  }
  next()
}
