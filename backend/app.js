import express from "express";
import clientsRoutes from "./src/routes/clients.js";
import reserveRoutes from "./src/routes/reserve.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

app.use("/api/clients", clientsRoutes);
app.use("/api/reserve", reserveRoutes)

export default app;