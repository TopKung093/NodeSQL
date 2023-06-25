const getUser = (req, res, db) => {
    db.query('SELECT * FROM user', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        } else {
            res.json(results);
        }
    });
}
const loginUser = (req, res, db) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Server error');
        }
        if (results.length === 0) {
            return res.status(401).send('Invalid email or password');
        }
        const user = results[0];
        if (password !== user.password) {
            return res.status(401).send('Invalid email or password');
        }
        const { id, name, username, role } = user;
        const userData = { id, name, username, role };
        return res.status(200).json(userData);
    });
}
const addUser = (req, res, db) => {
    const data = req.body
    db.query('INSERT INTO user SET ?', data, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json('Error inserting data into database');
        } else {
            console.log(`Data inserted into database with ID ${result.insertId}`);
            res.status(200).json('Data inserted into database');
        }
    });
}
const editUser = (req, res, db) => {
    const id = req.params.id;
    const { name, username, password } = req.body;
    db.query('UPDATE user SET name = ?, username = ?, password = ? WHERE id = ?', [name, username, password, id], (error, results) => {
        if (error) {
            console.log('Error updating user:', error);
            res.status(500).send('Error updating user');
        } else {
            res.send(results);
        }
    });
}
const delUser = (req, res, db) => {
    const id = req.params.id;
    db.query('DELETE FROM user WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.log('Error deleting user:', error);
            res.status(500).json('Error deleting user');
        } else {
            res.status(200).json('Delete Success');
        }
    });
}
module.exports = {
    getUser,
    loginUser,
    addUser,
    editUser,
    delUser
};