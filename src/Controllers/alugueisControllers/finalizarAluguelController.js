import connection from "../../Db/database.js";

export default async function finalizarAluguel(req, res) {
  const { id } = req.params;
  const today = new Date();
  try {
    await connection.query(
      `
            UPDATE rentals 
            SET "returnDate" = $1
            WHERE id = $2;
        `,
      [today, id]
    );
    const aluguel = await connection.query(
      `
            SELECT *
            FROM rentals
            WHERE id = $1; 
            
        `,
      [id]
    );

    let diasAluguel = Math.max(
      Math.round(aluguel.rows[0].rentDate.getDate() - new Date().getDate()),
      1
    );

    const taxaDeAtraso =
      Math.max(0, diasAluguel - aluguel.rows[0].daysRented) *
      (aluguel.rows[0].originalPrice / aluguel.rows[0].daysRented);

    await connection.query(
      `
                UPDATE rentals
                SET "delayFee" = $1
                WHERE id = $2;
            `,
      [taxaDeAtraso, id]
    );
    res.sendStatus(200);
  } catch (error) {
    console.log("Ocorreu um erro, ", error);
    res.sendStatus(500);
  }
}
