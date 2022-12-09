import connection from "../../Db/database";

export default async function listarJogos(req, res) {
  const { name } = req.query;
  try {
    const jogosRequeridos = await connection.query(
      `SELECT * 
      FROM games 
      JOIN categories 
      ON games."categoryId" = categories.id 
      WHERE categories.name 
      LIKE '$1%' `
      ,[name]);
      res.send(jogosRequeridos)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
