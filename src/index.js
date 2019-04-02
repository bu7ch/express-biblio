const express    = require("express");
const volleyball = require("volleyball");
const app        = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("everything is alright!");
});
app.use(volleyball);

app.listen(port, () => console.log(`[Application running on port ${port}]`));
