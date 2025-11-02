import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

// Config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.get('/', (req, res) => {
  res.render("home.ejs")
})

app.get('/abc', (req, res) => {
  res.send("Hello ABC");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname + "/views");
})
