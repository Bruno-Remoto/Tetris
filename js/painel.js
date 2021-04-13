class Painel {
    ctx;
    ctxNext;
    grid;
    peca;
    next;
    idRequisicao;
    tempo;
    init() {
        this.ctx.canvas.width = Coluna * Tam_Bloco;
        this.ctx.canvas.height = Linha * Tam_Bloco;
        
        this.ctx.scale(Tam_Bloco, Tam_Bloco);
    reset() {
        this.grid = this.getPainelVazio();
    }

    getPainelVazio() {
        return Array.from(
            {length: Linha}, () => Array(Coluna).fill(0)
        );
    }

    validar(p) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.grid[y] && this.grid[y][x] === 0 || (x >= 0 && x < Coluna && y <= Linha));
            })
        })
    }
    desenho() {
        this.peca.desenho();
        this.desenhoPainel();
    }
    desenhoPainel() {
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value > 0) {
                    this.ctx.fillStyle = Cores[value];
                    this.ctx.fillRext(x, y, 1, 1);
                }
            })
        })
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = p.shape[y][x], p.shape[x][y];
            }
        }
                 
        p.shape.forEach(row => row.reverse());
                 return p;
    }
}
