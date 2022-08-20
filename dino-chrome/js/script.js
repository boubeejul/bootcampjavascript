// antes do start
let dino = document.querySelector('.dino');
let background = document.querySelector('.background');
let background_position = 0;
let cactus = document.querySelector('.cactus');
let canjump = true;
let endgame = false;
dino.style.visibility = 'hidden';
cactus.style.visibility = 'hidden';

// início
function start() {
    document.querySelector('.button').style.visibility = 'hidden';
    dino.style.visibility = 'visible';
    dino.style.backgroundImage = 'url(images/dino.png)';
    dino.style.animation = 'dinoAnimation .3s steps(4) infinite';
    repoCactus();
    canjump = true;
    endgame = false;

    let looptime = setInterval(loop, 10);

    function loop() { // loop do fundo e verifica colisão
        background_position -= 6;
        background.style.backgroundPosition = background_position + 'px';
    
        let collision = ($(".cactus").collision($(".dino")));
        if (collision.length > 0) {
            endgame = true;
            clearInterval(looptime);
            gameover();
        }
    }
}
    function jump() {
        let position = 190;
        canjump = false;
        let jumpInterval = setInterval(() => {
            if (position <= 40) { // subida
                clearInterval(jumpInterval);
                let downInterval = setInterval(() => {
                    if (position >= 190) { // descida
                        clearInterval(downInterval);
                        canjump = true;
                    } else {
                        position += 5;
                        dino.style.top = position + 'px';
                    }
                }, 10);
            } else {
                position -= 5;
                dino.style.top = position + 'px';
            }
        }, 10);
    }

    function obstacle() {
        let cactus_move = 730;
            let cactusInterval = setInterval(() => {
                    if (cactus_move <= 0) {
                        clearInterval(cactusInterval);
                        cactus.style.left = 730 + 'px';
                        cactus.style.visibility = 'hidden';
                        if (endgame == false) {
                            let cactus_repo = setTimeout(repoCactus, 500);
                        }
                    } else {
                        cactus_move -= 6;
                        cactus.style.left = cactus_move + 'px';
                    }
                }, 10);
    }

    function repoCactus() {
            cactus.style.left = 730 + 'px';
            cactus.style.visibility = 'visible';
            obstacle();
    }


function gameover() {
    canjump = false;
    cactus.style.visibility = 'hidden';
    dino.style.backgroundImage = 'url(images/dino2.png)';
    dino.style.animation = 'none';
    document.querySelector('.button').style.visibility = 'visible';
}

window.onkeydown = function game_arrows(event) {
    if (event.keyCode == 32 && canjump == true && endgame == false) {
        event.preventDefault()
        jump()
    }
}
