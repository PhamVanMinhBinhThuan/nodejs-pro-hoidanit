import { Request, Response } from "express";    // Để sử dụng kiểu dữ liệu cho req, res
import { handleCreateUser } from "../services/user.service";

const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");   // Có hay không có .ejs cũng được
}

const postCreateUser = (req: Request, res: Response) => {
    // Object Destructuring
    const { fullName, email, address } = req.body;

    // Handle Create User
    handleCreateUser(fullName, email, address);
    
    return res.redirect("/");   // Dùng res.redirect thì đường URL hiện trên trình duyệt mới đúng, res.render thì không đúng
}

export { getHomePage, getCreateUserPage, postCreateUser };