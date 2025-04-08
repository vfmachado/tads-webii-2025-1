const { hashSync } = require("bcrypt");
const usersDAO = require("../models/users.dao");

const usersController = {
    getAll: (req, res) => {
        const resultado = usersDAO.findAll();        
        res.json(resultado);
    },
    create: async (req, res) => {
        console.log({ body: req.body });
        const user = req.body;

        user.password = hashSync(user.password, 10);

        usersDAO.insert(user);
        res.send("ADICIONANDO UM USUARIO");
    },
};

module.exports = usersController;