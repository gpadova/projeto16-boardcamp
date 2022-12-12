import connection from "../../Db/database.js";

export default async function inserirAluguel(req, res) {
  const { customerId, gameId, daysRented } = req.body;
  try {
    const jogo = await connection.query(
      `
            SELECT * 
            FROM games
            WHERE id = $1;
        `,
      [gameId]
    );
    const rentPrice = Number(daysRented) * Number(jogo.rows[0].pricePerDay)
    const today = new Date();

    await connection.query(
      `
        INSERT INTO rentals
        ("customerId", "gameId", "daysRented", "rentDate","returnDate", "originalPrice", "delayFee")
        VALUES
        ($1,$2,$3,$4,$5,$6,$7);
        `,
      [customerId, gameId, daysRented, today, null, rentPrice, null]
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
