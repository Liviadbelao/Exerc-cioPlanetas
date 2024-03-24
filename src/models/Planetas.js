 import Planeta from "./Planeta";
 import { mapas } from "../data/PlanetasLista";
 class Planetas {
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
        this.planetas.push(mapas)
         this.planetas.push(planeta)
        
         console.log(mapas);
       
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
const listaPlanetas = new Planetas();
const newPlaneta = new Planeta(mapas.nome, mapas.natureza, mapas.data);
listaPlanetas.addPlaneta(newPlaneta);

export default Planetas;