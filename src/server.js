import express from "express"
import cors from "cors"
import catRouter from "./Routes/categoriasRoutes.js"
import alugueisRoute from "./Routes/alugueisRoutes.js"
import clienteRoute from "./Routes/clientesRoutes.js"
import jogosRoute from "./Routes/jogosRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(catRouter)
app.use(alugueisRoute)
app.use(clienteRoute)
app.use(jogosRoute)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running in port ${port}`))
