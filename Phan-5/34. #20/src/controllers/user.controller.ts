import { Request, Response } from "express";    // Để sử dụng kiểu dữ liệu cho req, res

const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");   // Có hay không có .ejs cũng được
}

export { getHomePage, getCreateUserPage };