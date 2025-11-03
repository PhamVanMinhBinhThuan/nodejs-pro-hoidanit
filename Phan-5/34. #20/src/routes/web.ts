import express, {Express} from "express";       // Express là kiểu dữ liệu type script cho app
import { getCreateUserPage, getHomePage, postCreateUser, postDeleteUser, getViewUser } from "controllers/user.controller";     // Khi mà gõ controllers/* thì nó hiểu là ./src/controllers/* --> Được định nghĩa ở phần path trong user.service.ts ở phần path

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);   // Gọi hàm getHomePage mà không truyền gì hết thì nó sẽ truyền tất cả cho getHomePage ở user.controller trong đó có tham số req, res
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUser);
  router.post("/handle-delete-user/:id", postDeleteUser);   // Nếu không có dấu : thì code sẽ bị lỗi dấu : để hiểu đó là tham số
  router.get("/handle-view-user/:id", getViewUser);   // Nếu không có dấu : thì code sẽ bị lỗi dấu : để hiểu đó là tham số

  app.use("/", router);     // Website xuat phat tu duong link URL nay
};

export default webRoutes;