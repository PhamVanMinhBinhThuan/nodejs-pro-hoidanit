import express, {Express} from "express";       // Express là kiểu dữ liệu type script cho app
import { getCreateUserPage, getHomePage } from "../controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getCreateUserPage);

  app.use("/", router);     // Website xuat phat tu duong link URL nay
};

export default webRoutes;