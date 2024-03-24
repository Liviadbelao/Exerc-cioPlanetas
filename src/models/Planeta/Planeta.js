

export default class Planeta {
    constructor(nome, natureza, data) {

        this.id = this.gerarId();
        this.nome = nome;
        this.natureza = natureza;
        this.data = data;
        
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