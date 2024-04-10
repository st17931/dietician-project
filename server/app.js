const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./routes/use-routes.js")
const port = 3000;

app.use(cors())
app.use(express.json());

app.use('/users', user);

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
module.exports = app;
