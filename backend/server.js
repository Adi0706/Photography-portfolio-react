const express = require("express");
const sendEmailRouter = require("./sendEmailRouter"); // Path to the router module file

const app = express();
app.use(express.json());

app.use(sendEmailRouter);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
