const volleyball = require("volleyball");
const config     = require('config');
const express    = require("express");
const mongoose   = require('mongoose');
const book       = require("./route/book");
const app        = express();

mongoose.connect(config.DBHost, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[MongoDB is connected!!!]');
});
const port = process.env.PORT || 3000;

app.use(volleyball);
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("everything is alright!");
});
app.route("/book")
  .get(book.getBooks)
  .post(book.postBook)

app.route('/book/:id')
  .get(book.getBook)
  .put(book.updateBook)
  .delete(book.deleteBook)

app.listen(port, () => console.log(`[Application running on port ${port}]`));
