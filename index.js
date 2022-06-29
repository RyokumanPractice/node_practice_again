const express = require("express");
const app = express();
const port = 3000;

const home = require("./routes/home/home");

app.use("/", home);

app.listen(port, (err) => {
    if (err) return err;
    console.log(`server is listening on ${port}`);
});
