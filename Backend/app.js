import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
dotenv.config();
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.post("/tasks", async (req, res) => {
  const { task_description } = req.body;
  if (!task_description || !task_description.trim()) {
    return res.status(400).json({ error: "Task cannot be empty" });
  }

  try {
    const query = `INSERT INTO listItems (task_description) VALUES ($1)`;
    await db.query(query, [task_description]);
    res.json({ message: "Task added" });
  } catch (err) {
    console.error("List error", err);
    res.status(500).send("Error adding the listItem");
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM listitems");
    return res.json(result.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error fetching tasks");
  }
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
