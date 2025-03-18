// Import required modules
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// In-memory database
let tasks = [];

// Controllers
const taskController = {
    getAllTasks: (req, res) => {
        res.render('index', { tasks });
    },
    addTask: (req, res) => {
        const { task } = req.body;
        if (task) {
            tasks.push({ id: tasks.length + 1, task, completed: false });
        }
        res.redirect('/');
    },
    deleteTask: (req, res) => {
        const { id } = req.params;
        tasks = tasks.filter(t => t.id !== parseInt(id));
        res.redirect('/');
    },
    toggleTask: (req, res) => {
        const { id } = req.params;
        tasks = tasks.map(t => t.id === parseInt(id) ? { ...t, completed: !t.completed } : t);
        res.redirect('/');
    }
};

// Routes
app.get('/', taskController.getAllTasks);
app.post('/add', taskController.addTask);
app.post('/delete/:id', taskController.deleteTask);
app.post('/toggle/:id', taskController.toggleTask);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});