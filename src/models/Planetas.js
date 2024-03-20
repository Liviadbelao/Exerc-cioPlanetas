export default class Planetas {
    constructor(){
        this.planetas = []
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
    remove(id){
        this.planetas = this.planetas.filter(planeta=> planeta.id != id)
    }

    update(id, nome, natureza){
        const planeta = this.getPlanetaById(id);

        if(planeta){
            planeta.nome = nome;
            planeta.natureza = natureza;
        }
        return planeta;
    }
}