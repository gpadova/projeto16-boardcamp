import connection from "../../Db/database.js";

export default async function verificaExistencia(req, res, next){
    const { customerId, gameId } = req.body;

    const cliente = await connection.query(`
        SELECT * FROM customers WHERE id = $1;`, 
        [customerId])
    const jogo = await connection.query(`
        SELECT * FROM games WHERE id = $2;`, 
        [gameId])

    if((cliente.rows.length !== 0) || (jogo.rows.length !== 0)){
        return res.sendStatus(400)
    }
    next()    
}