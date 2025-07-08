import express from "express";
import reserveControllers from "../controllers/reserveControllers.js";

const router = express.Router();

router
    .route("/")
    .get(reserveControllers.getReserve)
    .post(reserveControllers.insertReserve);

router
    .route("/:id")
    .get(reserveControllers.getReserveId)
    .put(reserveControllers.updateReserve)
    .delete(reserveControllers.deleteReserve);

export default router;