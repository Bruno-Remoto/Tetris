const canvas = document.getElementById('painel');
const ctx = canvas.getContext('2d');
ctx.canvas.width = Coluna * Tam_Bloco;
ctx.canvas.height = Linha * Tam_Bloco;
ctx.scale(Tam_Bloco, Tam_Bloco);

let painel = new Painel();

function play(){
    painel.reset()
    let peca = new Peca(ctx);
    peca.desenho();

    painel.peca = peca;
    console.table(painel.grid)
}
document.addEventListener('keydown', event => {
    if(movimento[event.keyCode]) {
    event.preventDefault();
    
    let p = movimento[event.keyCode](painel.peca);

    if(painei.validar(p)) {
        painel,peca.mover(p)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
}


})
let p = movimento[event.keyCode](painel.peca);

if(event.keyCode === Key.Space) {
    while(painel.validar(p)) {
        painel.peca.mover(p);
        p = moveimento[Key.Down](painel.peca);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        painel.peca.desenho();
    }

    if (painel.peca.mover(p)) {
        painel.peca.mover(p)
    }
}