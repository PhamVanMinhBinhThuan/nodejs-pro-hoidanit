import getConnection from "../config/database";

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

export { handleCreateUser, getAllUsers }