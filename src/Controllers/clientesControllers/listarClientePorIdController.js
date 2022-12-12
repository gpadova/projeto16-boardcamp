import connection from "../../Db/database.js";

export default async function listarClientePorId(req, res) {
  const  idCliente  = req.params.id;
  try {
    const clienteRequeridos = await connection.query(
      `SELECT * 
      FROM customers 
      WHERE id = $1`
      ,[idCliente]);

      if(clienteRequeridos.rows.length == 0){
        return res.sendStatus(404)
      }
      res.send(clienteRequeridos.rows[0]).status(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
