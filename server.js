const express = require('express');
const app = express();
const cors = require("cors");
const taskRoutes = require('./routes/tasks');

app.use(cors());

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log("Serwer działa na porcie 3000");
});