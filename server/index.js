const express = require("express");

const taskRouter = require('./routes/taskRoutes')

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/api/v1/", (req, res) => {
  res.send("Its Alive!!!");
});

app.use("/api/v1/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
