 import Planeta from "./Planeta";
 import { mapas } from "../../data/PlanetasLista";
 class Planetas {
    constructor(){
        this.planetas = []
    
    }
    getAll(){
        return this.planetas
       
    }
    getPlanetaById(id){
        return this.planetas.find((planeta) => planeta.id === id)
    }
    addPlaneta(planeta){
         this.planetas.push(planeta)
       
    }
    remove(id){
        this.planetas = this.planetas.filter(planeta=> planeta.id !== id)
    }

    update(id, nome, natureza, data, populacao,humanos, galaxia, sisSolar, coordenadas, governante, titulo, corPrimaria, corSecundaria){
        const planeta = this.getPlanetaById(id);

        if(planeta){
            planeta.nome = nome;
            planeta.natureza = natureza;
            planeta.data = data;
            planeta.populacao = populacao;
            planeta.humanos = humanos;
            planeta.galaxia = galaxia;
            planeta.sisSolar = sisSolar;
            planeta.coordenadas = coordenadas;
            planeta.governante = governante;
            planeta.titulo = titulo;
            planeta.corPrimaria = corPrimaria;
            planeta.corSecundaria = corSecundaria;
        }
        return planeta;
    }
}
const listaPlanetas = new Planetas();
const newPlaneta = new Planeta(mapas.nome, mapas.natureza, mapas.data, mapas.populacao, mapas.humanos, mapas.galaxia, mapas.sisSolar, mapas.coordenadas, mapas.governante, mapas.titulo, mapas.corPrimaria, mapas.corSecundaria);
listaPlanetas.addPlaneta(newPlaneta);

export default listaPlanetas;