import { Request, Response } from "express";    // Để sử dụng kiểu dữ liệu cho req, res

const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");   // Có hay không có .ejs cũng được
}

const postCreateUser = (req: Request, res: Response) => {
    console.log(">>> Check data: ", req.body);  // Chưa lấy đươch data
    return res.redirect("/");   // Dùng res.redirect thì đường URL hiện trên trình duyệt mới đúng, res.render thì không đúng
}

export { getHomePage, getCreateUserPage, postCreateUser };