import getConnection from "../config/database";

// User.service sẽ phụ tá cho user.controller
const handleCreateUser = (
    fullName: string, 
    email: string, 
    address: string) => {
        // Insert into database

        // Return result
        console.log(">>> Insert a new user")

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