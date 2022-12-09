import express from "express"
import cors from "cors"
import catRouter from "./Routes/categoriasRoutes"
import alugueisRoute from "./Routes/alugueisRoutes"
import clienteRoute from "./Routes/clientesRoutes"
import jogosRoute from "./Routes/jogosRoutes"

const app = express()

app.use(express.json())
app.use(cors())
app.use(catRouter)
app.use(alugueisRoute)
app.use(clienteRoute)
app.use(jogosRoute)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running in port ${port}`))
