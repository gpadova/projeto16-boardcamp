import connection from "../../Db/database.js";

export default async function inserirCategorias(req, res) {
  const novaCategoria = req.body
  try {
    await connection.query(
      `INSERT INTO categories (name) VALUES ($1)`,
      [novaCategoria.name]
    );
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
}
