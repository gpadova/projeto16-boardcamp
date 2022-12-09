import connection from "../../Db/database";

export default async function inserirCategorias(req, res) {
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
