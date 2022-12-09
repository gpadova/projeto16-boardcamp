import connection from "../../Db/database";

export default async function listarCategorias(req, res){
    try{
        const categorias = await connection.query(`SELECT * FROM categories`)
        res.send(categorias.rows)
    }catch(err){
        res.sendStatus(500)
    }
}