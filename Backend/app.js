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
  try {
    const query = `INSERT INTO listItems (task_description) VALUES ($1)`;
    await db.query(query, [task_description]);
    res.json({ message: "Task added" });
  } catch (err) {
    console.error("List error", err);
    res.status(500).send("Error adding the listItem");
  }
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
