import connection from "../../Db/database.js";

export default async function apagarAluguel(req, res){
    const {id} = req.params
    try {
        await connection.query(`
            DELETE
            FROM rentals
            WHERE id = $1;
        `, [id])
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}