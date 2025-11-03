import express from "express";
import 'dotenv/config'  // Biến mỗi trường
import webRoutes from "./routes/web";

const app = express();      // Tạo một đối tượng express
const port = process.env.PORT || 3000;    // process là đối tượng của env, PORT được định nghĩa trong .env

// Config view engine
app.set('view engine', 'ejs');  // Thiết lập view engine là ejs 
app.set('views', __dirname + "/views"); // Thiết lập các file ejs trong folder view

// Config req.body --> Dùng cấu hình cho req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config static files: image/css/js
app.use(express.static('public'));

// Config routes
// Nên để cuối, cấu hình xong hết đi
webRoutes(app);   // Hàm webRoute được định nghĩa ở web.ts

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
