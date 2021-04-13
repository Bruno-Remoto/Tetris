'use strict'
const Coluna = 10
const Linha = 20
const Tam_Bloco = 30
const Key = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Space: 32
}
Object.freeze(Key)
const movimento = {
    [Key.Left]: p => ({ ...p, x: p.x -1}),
    [Key.Right]: p => ({ ...p, x: p.x + 1}),
    [Key.Down]: p => ({ ...p, y: p.y + 1}),
    [Key.Space]: p => ({ ...p, y: p.y + 1}),
    [Key.Up]: p => painel.rotate(p);
}
const Cores = [
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];
Object.freeze(Cores);
const Formas = [
    [],
    [ [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0] ],
    [ [2,0,0],
      [2,2,2],
      [0,0,0] ],
    [ [0,0,3],
      [3,3,3],
      [0,0,0] ],
    [ [4,4],
      [4,4] ],
    [ [0,5,5],
      [5,5,0],
      [0,0,0] ],
    [ [0,6,0],
      [6,6,6],
      [0,0,0] ],
    [ [7,7,0],
      [0,7,7],
      [0,0,0] ]
];
Object.freeze(Formas);
