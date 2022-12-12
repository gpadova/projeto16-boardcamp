import connection from "../../Db/database.js";

export default async function verificaId(req, res, next){
    const { id } = req.params;
    try {
        const aluguel =  await connection.query(`
            SELECT *
            FROM rentals
            WHERE id = $1;
        `, [id])
        if(aluguel.length === 0){
            return res.sendStatus(404)
        }
        if(aluguel.returnDate === null){
            return res.sendStatus(400)
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    next()
}