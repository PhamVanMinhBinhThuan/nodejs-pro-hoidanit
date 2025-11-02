import express, {Express} from "express";       // Express là kiểu dữ liệu type script cho app
import { getCreateUserPage, getHomePage, postCreateUser } from "../controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);   // Gọi hàm getHomePage mà không truyền gì hết thì nó sẽ truyền tất cả cho getHomePage ở user.controller trong đó có tham số req, res
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUser);

  app.use("/", router);     // Website xuat phat tu duong link URL nay
};

export default webRoutes;