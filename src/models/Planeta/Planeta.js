

export default class Planeta {
    constructor(nome, natureza, data, populacao, galaxia, sisSolar, coordenadas, governante, titulo) {

        this.id = this.gerarId();
        this.nome = nome;
        this.natureza = natureza;
        this.data = data;
        this.populacao = populacao;
        this.galaxia = galaxia;
        this.sisSolar = sisSolar;
        this.coordenadas = coordenadas;
        this.governante = governante;
        this.titulo = titulo;
        
    }
    gerarId() {
        return Math.floor(Math.random() * 999999);
    }
    /*     fullDateBR() {
            const month = data.getMonth()
            const day = data.getDate()
            if (month > 9) {
                month = month
            } else {
                month = `0${month}`
            }
            if (day > 9) {
                day = day
            } else {
                day = `0${day}`
            }
            return day , month
        } */
}