import express from "express"
import userRoutes from "./routes/users.route.js"


console.log("TP2 API REST")

const PORT = 8080
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", userRoutes)

app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})