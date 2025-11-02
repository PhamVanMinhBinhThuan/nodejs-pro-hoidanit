import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";

const app = express();
const port = process.env.PORT || 3000;

// Config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// Config routes
webRoutes(app);

// Config static files: image/css/js
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname + "/views");
})
