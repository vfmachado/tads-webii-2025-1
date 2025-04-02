
// Controllers

const taskDAO = require("../models/tasks.dao");
const Task = require("../models/tasks.model");
const Crypto = require('crypto');
/*
    - tratar entrada de dados
    - conectar com as regras de negocio (service / daos etc)
        ** em algumas variações a regra fica no proprio controller
    - conectar a resposta com a VIEW
*/
const taskController = {
    getAllTasks: (req, res) => {
        // ENTRADA ? -- NAO

        // PROCESSAMENTO
        const allTasks = taskDAO.findAll();

        // RENDERIZAR - CONECTAR COM A VIEW
        res.render('index', { tasks: allTasks });
    },
    addTask: (req, res) => {
        const { nome } = req.body;
        const id = Crypto.randomUUID(); // PODERIA PERFEITAMENTE PERTENCER AO MODEL
        const task = new Task(id, nome, false);
        taskDAO.add(task);

        res.redirect('/');
    },
    deleteTask: (req, res) => {
        const { id } = req.params;
        taskDAO.delete(id);
        res.redirect('/');
    },
    toggleTask: (req, res) => {
        const { id } = req.params;
        taskDAO.toggle(id);
        res.redirect('/');
    }
};

module.exports = taskController;