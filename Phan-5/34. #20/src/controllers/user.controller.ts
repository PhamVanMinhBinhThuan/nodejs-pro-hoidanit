import { Request, Response } from "express";    // Để sử dụng kiểu dữ liệu cho req, res
import { getAllUsers, handleCreateUser, handleDeleteUser, getUserByID, updateUserByID } from "services/user.service"; // Khi mà gõ services/* thì nó hiểu là ./src/services/* --> Được định nghĩa ở phần path trong user.service.ts ở phần path

const getHomePage = async (req: Request, res: Response) => {
    // Get users
    const users = await getAllUsers();  // Có await thì phải khai báo hàm async
    return res.render("home.ejs", {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");   // Có hay không có .ejs cũng được
}

const postCreateUser = async (req: Request, res: Response) => {
    // Object Destructuring
    const { fullName, email, address } = req.body;

    // Handle Create User
    // Do hàm handleCreateUser định nghĩa ở service là async nên có await và async
    // Lưu ý khi thao tác với database cần phải có await và async không thì sẽ bị lỗi
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");   // Dùng res.redirect thì đường URL hiện trên trình duyệt mới đúng, res.render thì không đúng
}

const postDeleteUser = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    const { id } = req.params;
    await handleDeleteUser(id);     // Vì hàm handleDeleteUser được định nghĩa là async nên cần có await và hàm gọi nó cũng cần async
    return res.redirect("/");   
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserByID(id);

    return res.render("view-user.ejs", {
        id: id,
        user: user,
    });   
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullName } = req.body;
    // Update user by id
    await updateUserByID(id, email, address, fullName);

    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };