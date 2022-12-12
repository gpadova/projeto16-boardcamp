import connection from "../../Db/database.js";

export default async function listarJogos(req, res) {
  const  nomeJogo  = req.query.name;
  let jogosRequeridos = ""
  try {
    if(nomeJogo === undefined){
    jogosRequeridos = await connection.query(
      `SELECT games.*, categories.name AS "categoryName"
      FROM games 
      JOIN categories 
      ON games."categoryId" = categories.id ; `
      )}
    else{
      jogosRequeridos = await connection.query(
        `SELECT games.*, categories.name AS "categoryName"
        FROM games 
        JOIN categories 
        ON games."categoryId" = categories.id
        WHERE games.name
        LIKE '$1%'
        ; `
        ), [nomeJogo]}
        res.send(jogosRequeridos.rows)
      }
   catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
