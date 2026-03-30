import express from "express";
import cors from "cors";
import db from "./db";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// API Endpoints
app.post("/api/leads", (req, res) => {
  const { name, email, plan, service_interest, message } = req.body;
  try {
    const stmt = db.prepare(`
      INSERT INTO leads (name, email, plan, service_interest, message)
      VALUES (?, ?, ?, ?, ?)
    `);
    const info = stmt.run(name, email, plan, service_interest, message);
    res.status(201).json({ id: info.lastInsertRowid, message: "Lead saved successfully" });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/leads", (req, res) => {
  try {
    const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    res.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
