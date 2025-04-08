// DAO - DATA ACCESS OBJECT
/*
    pode ser para conectar com o banco
*/

const tasks = [];
// NAO ESTAMOS CONSIDERANDO COISAS DO TIPO, ID INVALIDO
const taskDAO = {
    findAll() {
        return tasks;
    },
    add(task) {
        tasks.push(task)
    },
    delete(id) {
        const idx = tasks.findIndex(t => t.id == id);
        tasks.splice(idx, 1);
    },
    toggle(id) {
        const idx = tasks.findIndex(t => t.id == id);
        tasks[idx].toggle();
    }
}

module.exports = taskDAO;