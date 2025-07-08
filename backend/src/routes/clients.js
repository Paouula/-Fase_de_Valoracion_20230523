import express from "express";
import clientsControllers from "../controllers/clientsControllers.js";

const router = express.Router();

router
    .route("/")
    .get(clientsControllers.getAllClients)
    .post(clientsControllers.insertClients);

router
    .route("/:id")
    .get(clientsControllers.getAllClientsId)
    .put(clientsControllers.updateClients)
    .delete(clientsControllers.deleteClients);

export default router;