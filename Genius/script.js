let game_order = [];
let player_order = [];
let canclick = false;
let clicks = 0;
let rounds = 0;
let flashes;
let interval;
let win = false;

const green = document.getElementById('green'); // 0
const yellow = document.getElementById('yellow'); // 1
const red = document.getElementById('red'); // 2
const blue = document.getElementById('blue'); // 3
let rounds_page = document.getElementById('rounds_page');
let round_count = document.getElementById('round_count');
let button = document.getElementById('button');


// Início
function start() {
    win = false;
    flashes = 0;
    game_order = [];
    player_order = [];
    rounds = 1;
    round_count.style.visibility = 'visible';
    button.style.visibility = 'hidden';
    round_count.innerHTML = `Rodadas ${rounds}/5`;

    colorshuffle() // sorteio da cor
}

// Sorteio das cores
function colorshuffle() {
    if (rounds != 6) { // se ainda estiver dentro da quantidade de rounds, sorteia
        let color = Math.floor(Math.random() * 4);
        game_order.push(color);
        interval = setInterval(colorsorder, 1000);
        flashes = 0;
    } else { // fim de jogo
        win = true;
        gameover(win);
    }
}

function colorsorder() { // pisca as cores na ordem
    if (flashes == rounds) {
        clearInterval(interval);
        clearColors();
        canclick = true;
    } else {
        clearColors();
        setTimeout(() => {
            if (game_order[flashes] == 0) {
                green.style.backgroundColor = '#94ffa5';
            }
            if (game_order[flashes] == 1) {
                yellow.style.backgroundColor = '#fffab1';
            }
            if (game_order[flashes] == 2) {
                red.style.backgroundColor = '#f9baba';
            }
            if (game_order[flashes] == 3) {
                blue.style.backgroundColor = '#b0b0f7';
            }
            flashes++;
        }, 500);
    }  
    } 

function clearColors() { // volta às cores normais
    blue.style.backgroundColor = '#2b2bdf';
    red.style.backgroundColor = '#d00';
    yellow.style.backgroundColor = '#fff121';
    green.style.backgroundColor = '#35dd50';
}

// Verifica se a ordem do jogador esta correta
function check_order() {
    if (clicks == game_order.length) {
        let verify = (player_order.length == game_order.length) && game_order.every(function(element, index) {
            return element === player_order[index]; // verifica se os elementos de player_order seguem a ordem de game_order
        });
        if (verify == true) { //próximo round
            clicks = 0;
            canclick = false;
            player_order = [];
            rounds++;
            round_count.innerHTML = `Rodadas ${rounds}/5`;
            colorshuffle();
        } else { // fim de jogo
            colorsblink();
            gameover(win);
        }
    } 
} 

function colorsblink() { // pisca as cores ao errar
    red.style.backgroundColor = '#f9baba';
    green.style.backgroundColor = '#94ffa5';
    yellow.style.backgroundColor = '#fffab1';
    blue.style.backgroundColor = '#b0b0f7';
    setTimeout(() => {
        red.style.backgroundColor = '#d00';
        green.style.backgroundColor = '#35dd50';
        yellow.style.backgroundColor = '#fff121';
        blue.style.backgroundColor = '#2b2bdf';
    }, 500)
}

// Finaliza o jogo
function gameover(win) {
    game_order = [];
    player_order = [];
    rounds = 0;
    clicks = 0;
    canclick = false;
    button.style.visibility = 'visible';
    if (win == true) {
        round_count.innerHTML = 'Parabéns! :)';
    } else {
        round_count.innerHTML = 'Errou :(';
    }
}

// Cliques nas divs
red.addEventListener('click', (event) => {
    if (canclick == true) {
        red.style.backgroundColor = '#f9baba';
        setTimeout(() => {
            red.style.backgroundColor = '#d00';
        }, 500)
        player_order.push(2);
        clicks++
        check_order();
    }
})

green.addEventListener('click', (event) => {
    if (canclick == true) {
        green.style.backgroundColor = '#94ffa5';
        setTimeout(() => {
            green.style.backgroundColor = '#35dd50';
        }, 500)
        player_order.push(0);
        clicks++
        check_order();
    }
})

yellow.addEventListener('click', (event) => {
    if (canclick == true) {
        yellow.style.backgroundColor = '#fffab1';
        setTimeout(() => {
            yellow.style.backgroundColor = '#fff121';
        }, 500)
        player_order.push(1);
        clicks++
        check_order();
    }
})

blue.addEventListener('click', (event) => {
    if (canclick == true) {
        blue.style.backgroundColor = '#b0b0f7';
        setTimeout(() => {
            blue.style.backgroundColor = '#2b2bdf';
        }, 500)
        player_order.push(3);
        clicks++
        check_order();
    }
})