const usersDAO = require("../models/users.dao");

const usersController = {
    getAll: (req, res) => {
        const resultado = usersDAO.findAll();        
        res.json(resultado);
    },
    create: (req, res) => {
        console.log({ body: req.body });
        const user = req.body;
        usersDAO.insert(user);
        res.send("ADICIONANDO UM USUARIO");
    },
};

module.exports = usersController;