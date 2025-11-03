import getConnection from "config/database";    // Khi mà gõ config/* thì nó hiểu là ./src/config/* --> Được định nghĩa ở phần path trong user.service.ts ở phần path

// User.service sẽ phụ tá cho user.controller
const handleCreateUser = async (
    fullName: string, 
    email: string, 
    address: string) => {
        // Insert into database
        const connection = await getConnection();
        try {
            const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
            const values = [fullName, email, address];
            const [result, fields] = await connection.execute(sql, values);
            // console.log(result);    // Khong can cung dc
            // return result;  // Khong can cung dc
        } catch (err) {
            console.log(err);
            return [];
        }
}

const getAllUsers = async() => {
    const connection = await getConnection();
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`');
        return results;
    } catch (err) {
        return [];
    }
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
    try {
        const connection = await getConnection();

        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);

        return result[0];       // Nếu chỉ return result thì nó sẽ trả về 1 mảng 
                                // các đối tượng mà tìm thấy nên không thể sử dụng được nên cần truy cập vào phần tử 0 để trả về 1 đối tượng
    } catch (err) {
        console.log(err);
        return [];
    }
}

const updateUserByID = async (id: string, email: string, address: string, fullName: string) => {
    try {
        const connection = await getConnection();

        // Trong SQL fullName được thiết lập là name
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ?  WHERE `id` = ? LIMIT 1';    // Không có LIMIT 1 cũng được nó chỉ cập nhật phần từ đầu tiên có ID
        const values = [fullName, email, address, id];

        const [result, fields] = await connection.execute(sql, values);

        return(result);
    } catch (err) {
        console.log(err);
    }
}

export { handleCreateUser, getAllUsers, handleDeleteUser, getUserByID, updateUserByID }