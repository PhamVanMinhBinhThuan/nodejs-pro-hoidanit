import express, {Express} from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", (req, res) => {
    res.render("home.ejs");
  });

  router.get("/abc", (req, res) => {
    res.send("Hello ABC");
  });

  app.use("/", router);     // Website xuat phat tu duong link URL nay
};

export default webRoutes;