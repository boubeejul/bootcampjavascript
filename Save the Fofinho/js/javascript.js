// O jogo começa aqui
function start() {

    // Variáveis
    gametimer = setInterval(loop, 30)
    enemy1_positionY = parseInt(Math.random() * 350)
    player_lifes = 2
    enemy_lifes = 4
    player_score = 2000
    attack = true
    gameend = false
    enemy_lf = false
    playerlife_f = false
    fofinho_f = false
    player_0 = false

    somAtaque = document.getElementById("somAtaque")
    fofinhoSalvo = document.getElementById("fofinhoSalvo")
    somJogo = document.getElementById("somJogo")
    fofinhoPego = document.getElementById("fofinhoPego")
    jogador = document.getElementById("jogador")
    gameEnd = document.getElementById("gameEnd")

        somJogo.addEventListener("ended", function() { somJogo.currentTime = 0; somJogo.play(); }, false)
        somJogo.play()
        somJogo.volume = 0.1
        $("#inicio").hide()

        // Criação das divs
        $("#background").append("<div id='player' class='animation2'></div>")
        $("#background").append("<div id='enemy1' class='animation3'></div>")
        $("#background").append("<div id='enemy2' class='animation4'></div>")
        $("#background").append("<div id='fofinho' class='animation1'></div>")

        $("#background").append("<div id='info'></div>")
        $("#info").append("<div id='scores'></div>")
        $("#info").append("<div id='lifenemy'></div>")
        $("#info").append("<div id='lifeplayer'></div>")

    // Função dos Loops
    function loop() {
        enemy1move()
        enemy2move()
        fofinhomove()
        collisions()
        scores()

        // Teclas
        window.onkeydown = function game_arrows(event) {
            switch (event.keyCode) {
                case 87: // W
                    event.preventDefault()
                    moveplayerUp()
                break;

                case 83: // S
                    event.preventDefault()
                    moveplayerDown()
                break;

                case 65: // A
                    event.preventDefault()
                    moveplayerLeft()
                break;

                case 68: // D
                    event.preventDefault()
                    moveplayerRight()
                break;

                case 74: // J
                    event.preventDefault()
                    playerAttack()
            }
        }

        // Movimento Background
        let moveleft = parseInt($("#background").css("background-position"))
        $("#background").css("background-position", moveleft-1)
    }

        // Movimento Inimigo 1
        function enemy1move() {
            let position_x = parseInt($("#enemy1").css("right"))
            $("#enemy1").css("top", enemy1_positionY)
            $("#enemy1").css("right", position_x + 10)

            if (position_x >= 600) {
                enemy1_positionY = parseInt(Math.random() * 350)
                $("#enemy1").css("right", 8)
                $("#enemy1").css("top", enemy1_positionY)
            }
        }

        // Movimento Inimigo 2
        function enemy2move() {
            let position_x = parseInt($("#enemy2").css("right"))

            $("#enemy2").css("right", position_x+3)

            if (position_x >= 589) {
                $("#enemy2").css("right", 20)
            }
        }

        // Movimento Fofinho
        function fofinhomove() {
            let position_x = parseInt($("#fofinho").css("left"))

            $("#fofinho").css("left", position_x+2)

            if (position_x >= 620) {
                $("#fofinho").css("left", 20)
            }
        }

        // Movimentos Player
        function moveplayerUp() { // Pra cima
            let up = parseInt($("#player").css("top"))
            $("#player").css("top", up - 30)
                if (up <= 0) {
                    $("#player").css("top", up-0)
                }  
        }

        function moveplayerDown() { // Pra baixo
            let up = parseInt($("#player").css("top"))
            $("#player").css("top", up + 30)
                if (up >= 360) {
                    $("#player").css("top", up + 0)
                }  
        }

        function moveplayerRight() { // Pra direita
            let right = parseInt($("#player").css("left"))
            $("#player").css("left", right + 30)
                if (right >= 540){
                    $("#player").css("left", right + 0)
                }
        }

        function moveplayerLeft() { // Pra esquerda
            let left = parseInt($("#player").css("left"))
            $("#player").css("left", left - 30)
                if (left <= 8) {
                    $("#player").css("left", left + 0)
                }
        }
    
        function playerAttack() { // Ataque
            let player_top = parseInt($("#player").css("top"))
            let player_left = parseInt($("#player").css("left"))
            if ((attack == true) && (gameend == false)) {
                attack = false
                somAtaque.play()
                somAtaque.volume = 0.2
                $("#background").append("<div id='attack1'></div>")
                $("#attack1").css("top", player_top+35)
                $("#attack1").css("left", player_left+112)
                attack1_mov = setInterval(playerAttackM, 30)
            }
        }

            function playerAttackM() { // Movimentação do ataque
                let attack_left = parseInt($("#attack1").css("left"))
                $("#attack1").css("left", attack_left + 15)
                if (attack_left >= 640) {
                    clearattack()
                }
            }

        // Remove o ataque
        function clearattack() {
                $("#attack1").remove()
                attack = true
                clearInterval(attack1_mov)
        }
        
        // Colisões
        function collisions() {
            let collision1 = ($("#attack1").collision($("#enemy1")))
            let collision2 = ($("#attack1").collision($("#enemy2")))
            let collision3 = ($("#player").collision($("#enemy1")))
            let collision4 = ($("#player").collision($("#enemy2")))
            let collision5 = ($("#player").collision($("#fofinho")))
            let collision6 = ($("#fofinho").collision($("#enemy2")))

            if (collision1.length > 0) { // Ataque e Inimigo 1
                $("#enemy1").remove()
                player_score = player_score - 100
                    if (enemy_lifes > 0) {
                        enemy_lifes --
                        enemylife_score(enemy_lifes)
                        clearattack()
                        timerepo3 = setInterval(repoEnemy1, 1000)
                    } else if ((enemy_lifes == 0) || ((enemy_lifes == 0) && (player_score <= 0))){
                        enemy_lf = true
                        gameover()
                    } else if (player_score <= 0) {
                        zeroscore()
                    }
            }

            if (collision2.length > 0) { // Ataque e Inimigo 2
                $("#enemy2").remove()
                clearattack()
                player_score = player_score - 100
                if (player_score <= 0) {
                    zeroscore()
                }
                if (gameend == false) {
                    timerepo1 = setInterval(repoEnemy2, 2000)
                }
            }

            if (collision3.length > 0) { // Jogador e Inimigo 1
                $("#player").remove()
                if (player_lifes > 0) {
                    jogador.play()
                    player_lifes --
                    playerlife_score(player_lifes)
                    player_score = player_score - 100
                    timerepo4 = setInterval(repoPlayer, 1000)
                } else if (player_lifes == 0) {
                    playerlife_f = true
                    player_score = 0
                    fofinhoPego.play()
                    gameover()
                }
            }

            if (collision4.length > 0) { // Jogador e Inimigo 2
                $("#player").remove()
                if ((player_lifes > 0) && (gameend == false)) {
                    jogador.play()
                    player_lifes --
                    playerlife_score(player_lifes)
                    player_score = player_score - 100
                    timerepo4 = setInterval(repoPlayer, 1000)
                } else if (player_lifes == 0) {
                    playerlife_f = true
                    player_score = 0
                    fofinhoPego.play()
                    gameover()
                }
            }

            if (collision5.length > 0) { // Jogador e Fofinho
                $("#fofinho").remove()
                fofinhoSalvo.play()
                fofinhoSalvo.volume = 0.2
                    if (gameend == false) {
                        timerepo2 = setInterval(repoFofinho, 2000)
                    }
            }

            if (collision6.length > 0) { // Fofinho e Inimigo 2
                fofinhoPego.play()
                fofinhoPego.volume = 0.2
                fofinho_f = true
                player_score = 0
                gameover()
            }
        }

        // Reposições após colisões
        function repoEnemy2() {
            clearInterval(timerepo1)
            if (gameend == false) {
                $("#background").append("<div id='enemy2' class='animation4'></div>")
            }
        }

        function repoFofinho() {
            clearInterval(timerepo2)
            if (gameend == false) {
                $("#background").append("<div id='fofinho' class='animation1'></div>")
            }
        }

        function repoEnemy1() {
            clearInterval(timerepo3)
            if (gameend == false) {
                enemy1_positionY = parseInt(Math.random() * 350)
                $("#background").append("<div id='enemy1' class='animation3'></div>")
                $("#enemy1").css("right", 8)
                $("#enemy1").css("top", enemy1_positionY)
            }
        }

        function repoPlayer() {
            clearInterval(timerepo4)
            $("#background").append("<div id='player' class='animation2'></div>")
        }

        // Pontuação e vidas
        function scores() {
            $("#scores").html(`Pontuação: ${player_score}`)
        }

        function enemylife_score(lifes) {
            switch (lifes) {
                case 3:
                    $("#lifenemy").css("background-image", "url(images/demon/lifenemy_4.png)")
                break;

                case 2:
                    $("#lifenemy").css("background-image", "url(images/demon/lifenemy_3.png)")
                break;

                case 1:
                    $("#lifenemy").css("background-image", "url(images/demon/lifenemy_2.png)")
                break;

                case 0:
                    $("#lifenemy").css("background-image", "url(images/demon/lifenemy_1.png)")
            }
        }

        function playerlife_score(lifes) {
            switch (lifes) {
                case 1:
                    $("#lifeplayer").css("background-image", "url(images/sorceress/lifeplayer_2.png)")
                break;

                case 0:
                    $("#lifeplayer").css("background-image", "url(images/sorceress/lifeplayer_1.png)")
            }
        }

        function zeroscore() {
            fofinhoPego.play()
            fofinhoPego.volume = 0.2
            player_0 = true
            player_score = 0
            gameover()
        }

}
// Fim do jogo
function gameover() {
    somJogo.pause()
    gameend = true
    clearInterval(gametimer)
    if (typeof attack1_mov !== 'undefined') {
        clearInterval(attack1_mov)
    }

    $("#player").remove()
    $("#enemy1").remove()
    $("#enemy2").remove()
    $("#fofinho").remove()
    $("#attack1").remove()
    $("#info").remove()

    $("#inicio").show()
    if (enemy_lf == true) {
        gameEnd.play()
        $("#tutorial").html(`Você derrotou o fantasma e salvou o Fofinho! Pontuação: ${player_score}`)
        $("#button").html("Jogar de novo")
    } else if (playerlife_f == true) {
        $("#tutorial").html(`Suas vidas acabaram. Pontuação: ${player_score}`)
        $("#button").html("Jogar de novo")
    } else if ((fofinho_f == true) || (player_0 == true)) {
        $("#tutorial").html(`Você não conseguiu salvar o Fofinho. Pontuação: ${player_score}`)
        $("#button").html("Jogar de novo")
    }
}