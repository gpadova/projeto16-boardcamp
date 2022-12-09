import connection from "../../Db/database";

export default async function atualizaCliente(req, res) {
  const { name, phone, cpf, birthday } = novoCliente;
  const id = req.params;
  try {
    await connection.query(
      `UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4) 
       WHERE id=$5`,
      [name, phone, cpf, birthday, id]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
