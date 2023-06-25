const express = require('express');
const router = express.Router();
const { getUser, loginUser, addUser, editUser, delUser } = require('../controller/userController')
module.exports = (db) => {
    router.get('/user/get', (req, res) => {
        getUser(req, res, db);
    });
    router.post('/user/login', (req, res) => {
        loginUser(req, res, db);
    });
    router.post('/user/add', (req, res) => {
        addUser(req, res, db);
    });
    router.put('/user/edit/:id', (req, res) => {
        editUser(req, res, db);
    });
    router.delete('/user/del/:id', (req, res) => {
        delUser(req, res, db);
    });
    return router;
};






