import getConnection from "config/database";    // Khi mà gõ config/* thì nó hiểu là ./src/config/* --> Được định nghĩa ở phần path trong user.service.ts ở phần path
import { prisma } from "config/client";

// User.service sẽ phụ tá cho user.controller
const handleCreateUser = async (
    fullName: string, 
    email: string, 
    address: string) => {

        // Thao tac voi database nen can await
        // Vào bảng / model user định nghĩa ở schema.prisma rồi thêm dữ liệu vào
        const newUser = await prisma.user.create({
            data: {
                name: fullName,
                email: email,
                address: address,
            }
        })
        return newUser;
}

const getAllUsers = async() => {
    const users = await prisma.user.findMany();
    return users;
}

const handleDeleteUser = async (id: string) => {
    try {
        const connection = await getConnection();

        const sql = 'DELETE FROM `users` WHERE `id` = ? LIMIT 1';  // LIMIT 1 xóa 1 phần tử đầu tiên thôi, nhưng ID là duy nhất xóa cs dc
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getUserByID = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        }
    });

    return user;
}

const updateUserByID = async (id: string, email: string, address: string, fullName: string) => {
    const updatedUser = await prisma.user.update ({
        where: { id: +id },     // Ở trong bảng dữ liệu định nghĩa id kiểu int nhưng dữ liệu truyền vào là string, có 1 cách để chuyển từ string sang int là dùng dấu +
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })

    return updatedUser;
}

export { handleCreateUser, getAllUsers, handleDeleteUser, getUserByID, updateUserByID }