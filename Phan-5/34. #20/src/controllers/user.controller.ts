import { Request, Response } from "express";    // Để sử dụng kiểu dữ liệu cho req, res
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    // Get users
    const users = await getAllUsers();  // Có await thì phải khai báo hàm async
    console.log("Check users: ", users);
    return res.render("home.ejs", {
        name: users
    });
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