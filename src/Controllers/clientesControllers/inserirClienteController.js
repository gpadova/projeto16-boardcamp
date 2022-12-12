import connection from "../../Db/database.js";

export default async function inserirCliente(req, res){
    const {name, phone, cpf, birthday} = req.body
    try{
        await connection.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`, [name, phone, cpf, birthday])    
        res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}