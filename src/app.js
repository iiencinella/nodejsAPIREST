import express from "express"
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'
import { PORT } from "./config.js"

const app = express()

app.use(express.json())

// El primer parámetro es el pefijo de la ruta consultada
app.use('/api', employeesRoutes)
app.use(indexRoutes)

//Usando un middleword para cuando la ruta ingresada es incorrecta
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})

export default app