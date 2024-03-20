export default class Planetas {
    constructor(){
        this.planetas = []
        this.id = this.gerarId();
    }
    getAll(){
        return this.planetas
    }
    getPlanetaById(id){
        return this.planetas.find((planeta) => planeta.id == id)
    }
    addPlaneta(planeta){
        this.planetas.push(planeta)
    }

    gerarId() {
        return Math.floor(Math.random() * 999999);
    }
    remove(id){
        this.planetas = this.planetas.filter(planeta=> planeta.id != id)
    }

    update(id, nome, natureza, data){
        const planeta = this.getPlanetaById(id);

        if(planeta){
            planeta.nome = nome;
            planeta.natureza = natureza;
            planeta.data = data;
        }
        return planeta;
    }
}