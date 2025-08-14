import express from "express";
import db from "./db.js";
const router = express.Router();

// Routen speichern
router.post("/routes", async (req, res) => {
  const { from, to } = req.body;
  if (!from || !to) return res.status(400).json({ error: "Fehlende Parameter" });
  await db.run("INSERT INTO routes (fromLocation, toLocation) VALUES (?, ?)", [from, to]);
  res.json({ success: true });
});

// Alle gespeicherten Routen abrufen
router.get("/routes", async (req, res) => {
  const rows = await db.all("SELECT * FROM routes");
  res.json(rows);
});

export default router;

