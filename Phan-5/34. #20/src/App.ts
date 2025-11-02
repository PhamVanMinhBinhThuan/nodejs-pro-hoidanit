import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<h1 style="color: red">Hello World!</h1>`)
})

app.get('/abc', (req, res) => {
  res.send("Hello ABC");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
