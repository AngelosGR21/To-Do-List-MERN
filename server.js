const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//routes

const tasks = require("./routes/tasks");

app.use("/api/tasks", tasks);

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
