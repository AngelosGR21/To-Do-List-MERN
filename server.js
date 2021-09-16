const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//database
const connection = require("./db/connection");

//routes
const tasks = require("./routes/tasks");

//middleware
app.use("/api/tasks", tasks);

//server connection
const startServer = async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`server is up and running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
