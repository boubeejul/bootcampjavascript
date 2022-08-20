var quadrados = document.getElementsByClassName('quadrado');
var jogador = 'X';
var jogador_atual = document.getElementById('jogador');
jogador_atual.innerHTML = jogador;
var jogador_m = document.getElementById('jogador_menu');
var fim = false;

function escolha(id) {
    let quadrado = document.getElementById(id);
    if (fim == false) {
        if (quadrado.innerHTML == '-') {
            quadrado.innerHTML = jogador;
            quadrado.style.backgroundColor = '#f9f9f9';
    
            if (jogador == 'X') {
                jogador = 'O';
            } else{
                jogador = 'X';
            }
    
            jogador_atual.innerHTML = jogador;
            fimdejogo()
        } else {
            return;
        }
    } else {
        return;
    }
}

function fimdejogo() {
    if ((quadrados[0].innerHTML == "X") && (quadrados[1].innerHTML == "X") && (quadrados[2].innerHTML == "X") || (quadrados[0].innerHTML == "O") && (quadrados[1].innerHTML == "O") && (quadrados[2].innerHTML == "O")) {
        quadrados[0].style.backgroundColor = '#edd1fd';
        quadrados[1].style.backgroundColor = '#d1fde8';
        quadrados[2].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[3].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[5].innerHTML == "X") || (quadrados[3].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[5].innerHTML == "O")) {
        quadrados[3].style.backgroundColor = '#edd1fd';
        quadrados[4].style.backgroundColor = '#d1fde8';
        quadrados[5].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[6].innerHTML == "X") && (quadrados[7].innerHTML == "X") && (quadrados[8].innerHTML == "X") || (quadrados[6].innerHTML == "O") && (quadrados[7].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {
        quadrados[6].style.backgroundColor = '#edd1fd';
        quadrados[7].style.backgroundColor = '#d1fde8';
        quadrados[8].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[0].innerHTML == "X") && (quadrados[3].innerHTML == "X") && (quadrados[6].innerHTML == "X") || (quadrados[0].innerHTML == "O") && (quadrados[3].innerHTML == "O") && (quadrados[6].innerHTML == "O")) {
        quadrados[0].style.backgroundColor = '#edd1fd';
        quadrados[3].style.backgroundColor = '#d1fde8';
        quadrados[6].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[1].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[7].innerHTML == "X") || (quadrados[1].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[7].innerHTML == "O")) {
        quadrados[1].style.backgroundColor = '#edd1fd';
        quadrados[4].style.backgroundColor = '#d1fde8';
        quadrados[7].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[2].innerHTML == "X") && (quadrados[5].innerHTML == "X") && (quadrados[8].innerHTML == "X") || (quadrados[2].innerHTML == "O") && (quadrados[5].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {
        quadrados[2].style.backgroundColor = '#edd1fd';
        quadrados[5].style.backgroundColor = '#d1fde8';
        quadrados[8].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[0].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[8].innerHTML == "X") || (quadrados[0].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[8].innerHTML == "O")) {
        quadrados[0].style.backgroundColor = '#edd1fd';
        quadrados[4].style.backgroundColor = '#d1fde8';
        quadrados[8].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    } else if ((quadrados[2].innerHTML == "X") && (quadrados[4].innerHTML == "X") && (quadrados[6].innerHTML == "X") || (quadrados[2].innerHTML == "O") && (quadrados[4].innerHTML == "O") && (quadrados[6].innerHTML == "O")) {
        quadrados[2].style.backgroundColor = '#edd1fd';
        quadrados[4].style.backgroundColor = '#d1fde8';
        quadrados[6].style.backgroundColor = '#fdf7d1';
        fim = true;
        jogador_m.style.display = 'none';
    }
}

function reiniciar(){
    window.location.reload();
}