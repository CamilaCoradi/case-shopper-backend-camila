import app from "./app"
import { productsRouter } from "./routes/productsRouter"
import { ordersRouter } from "./routes/ordersRouter"

app.use("/shopper", productsRouter)
app.use("/shopper", ordersRouter)