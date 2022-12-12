import connection from "../../Db/database.js";

export default async function listarAlugueis(req, res){
    const {customerId, gameId} = req.params
    
    try{
        const alugueis = await connection.query(`
        SELECT rentals.*, 
      
        json_build_object(
            'id', customers.id, 
            'name', customers.name
            ) AS customer,
        
        json_build_object(
            'id', games.id, 
            'name', games.name, 
            'categoryId', games."categoryId", 
            'categoryName', categories.name
            ) AS game
        FROM rentals 
            JOIN games
                ON rentals."gameId" = games.id
            JOIN customers
                ON rentals."customerId" = customers.id
            JOIN  categories 
                ON categories.id=games."categoryId"             
        ;
        `
        )
        res.send(alugueis.rows)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}