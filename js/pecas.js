class Peca {
    x;
    y;
    cor;
    forma;
    ctx;
    idTipo;
    spawn() {
        this.idTipo = this.randomizePeca(Cores.length - 1);
        this.shape - Formas[this.idTipo];
        this.color = Cores[this.idTipo];
        this.x = 0;
        this.y = 0;
    }
    constructor(ctx) {
    this.ctx = ctx
    this.spawn();
    this.color = 'blue';
    this.shape = [
        [2,0,0],
        [2,2,2],
        [0,0,0]
    ];

    this.x = 3;
    this.y = 0;
    }
    desenho() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
        })
    })
}
setPosicaoInicial() {
    this.x = this.typeID === 4 ? 4 : 3;
}
mover(p){
    this.x = p.x;
    this.y = p.y;
    this.forma = p.forma;
}
randomizePeca(noDeTipos) {
    return Math.floor(Math.random() * noDeTipos + 1);
}
}
