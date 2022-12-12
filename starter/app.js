var express = require("express");
var tasks = require("./routes/tasks");
var connectDB = require("./db/connect");
require('dotenv').config()

var app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./public'))

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log("port is start 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.get('/api/v1/tasks') . - get all the task
// app.post('/api/v1/tasks') . - get all the task
// app.get('/api/v1/tasks/:id') . - get all the task
// app.patch('/api/v1/tasks/:id') . - get all the task
// app.delete('/api/v1/tasks/:id') . - get all the task
