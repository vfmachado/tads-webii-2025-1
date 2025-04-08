class Task {
    constructor(id, name, completed) {
        if (name  && name.trim().length > 0) {
            this.id = id;
            this.name = name;
            this.completed = completed;
            this.createdAt = new Date();
            this.completedAt = null;
        } else {
            throw Error("Nome precisa ser passado!")
        }
    }

    // PODERIA USAR REGRAS DE NEGOCIO QUE PERTECEM AO MODEL PARA MANIPULAR, MAPEAR ESSA TASK POR EXEMPLO
    toggle() {
        this.completed = !this.completed;
        if (this.completed) {
            this.completedAt = new Date();
        } else {
            this.completedAt = null;
        }
    }

    // POSSO MAPEAR COMO EU GOSTARIA QUE ISSO PARECESSE PARA O FRONT
    toJSON(){

    }
}

module.exports = Task;