import express from "express";
import "./infra/provider/kafka/consumers"

const PORT = process.env.PORT ?? 3004;
const app = express();


app.use(express.json())


app.listen(PORT, () => console.log(`Server notificacoes running on PORT ${PORT} `))