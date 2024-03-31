

export default class Planeta {
    constructor(nome, natureza, data, populacao, humanos, galaxia, sisSolar, coordenadas, governante, titulo, corPrimaria, corSecundaria) {

        this.id = this.gerarId();
        this.nome = nome;
        this.natureza = natureza;
        this.data = data;
        this.populacao = populacao;
        this.humanos = humanos;
        this.galaxia = galaxia;
        this.sisSolar = sisSolar;
        this.coordenadas = coordenadas;
        this.governante = governante;
        this.titulo = titulo;
        this.corPrimaria = corPrimaria;
        this.corSecundaria = corSecundaria;
        
    }
    gerarId() {
        return Math.floor(Math.random() * 999999);
    }
  
}