

export default class Planeta {
    constructor(id, nome, natureza, data){
        this.id = id;
        this.nome = nome;
        this.natureza = natureza;
        this.data = data;
    }

    fullDateBR() {
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
    }
}