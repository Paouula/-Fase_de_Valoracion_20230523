import express from "express";
import clientsRoutes from "./src/routes/clients.js";
import reserveRoutes from "./src/routes/reserve.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

const swaggerDocument = JSON.parse(
    fs.readFileSync(
      path.resolve("./documentacion.json"),
      "utf-8"
    )
  )

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/clients", clientsRoutes);
app.use("/api/reserve", reserveRoutes);

export default app;