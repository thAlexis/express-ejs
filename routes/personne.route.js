import express from "express";
import personneController from "../controllers/personne.controller.js";
// ici, on gère les routes relatives  aux personnes
const router = express.Router();

// Mapping entre route et controleur
router.get("/", personneController.showPersonnes);
router.post("/", personneController.addPersonne);
router.get("/:id", personneController.deletePersonne);

export default router;
