import app from "./app.js"
import { PORT } from "./config.js"

app.listen(PORT) // app.listen(4000)

console.log('Server on port ' + PORT)
