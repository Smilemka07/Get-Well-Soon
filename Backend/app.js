import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/addTask", (req, res) => {
  const { taskDescription } = req.body;
  console.log("Received:", taskDescription);
  res.json({ message: "Task added" });
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
