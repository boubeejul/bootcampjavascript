function troca(name_) {
    let movie_image = document.getElementById('container')
    let movie_description = document.getElementById('description')
    let movie_name = document.getElementsByClassName('title')[0]
    
    switch (name_) {
        case 'filme1':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/movies/filme1_1.jpg')"
            movie_name.innerHTML = 'Scooby-Doo!: O Filme'
            movie_description.innerHTML = 'Scooby-Doo e sua turma que resolve crimes são individualmente convocados à Ilha do Espanto para investigar uma série de incidentes paranormais no lugar mais descolado para as Férias de Primavera.'
        break;

        case 'filme2':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/movies/filme2_2.jpg')"
            movie_name.innerHTML = 'Scooby-Doo 2: Monstros à Solta'
            movie_description.innerHTML = 'Os maiores monstros das histórias de Scooby estão reunidos em um só filme! E é só misturar esses maníacos com Scooby-Doo e o resto da Mistério S/A.'
        break;

        case 'filme3':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/movies/filme3_3.jpg')"
            movie_name.innerHTML = 'Diretamente de Lugar Nenhum: Scooby-Doo! Encontra Coragem o Cão Covarde'
            movie_description.innerHTML = 'Scooby-Doo se une a Coragem, o Cão Covarde, em uma parceria inédita. Juntos, essa dupla canina tenta superar os medos e salvar o mundo de um exército de insetos.'
        break;

        case 'filme4':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/movies/filme4_4.jpg')"
            movie_name.innerHTML = 'Scooby-Doo! e o Rei dos Duendes'
            movie_description.innerHTML = 'Que apuro! O Incrível Krudsky, um mágico decadente, roubou a luz mágica da Princesa Fairy Willow e Scooby-Doo e Salsicha precisam detê-lo.'
        break;

        case 'filme5':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/movies/filme5_5.jpg')"
            movie_name.innerHTML = 'Scooby-Doo! e o Fantasma Gourmet'
            movie_description.innerHTML = 'Quando o misterioso Fantasma Vermelho volta, a turma se junta a Bobby Flay e sua amiga culinária Giada De Laurentiis para saborear pistas e servir justiça.'
        break;

        case 'serie1':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/series/serie1_1.jpg')"
            movie_name.innerHTML = 'O Que Há de Novo, Scooby-Doo?'
            movie_description.innerHTML = 'Sempre munidos de novas invenções, a turma de adolescentes e o cão Scooby-Doo encontram fantasmas e monstros em suas aventuras.'
        break;

        case 'serie2':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/series/serie2_2.jpg')"
            movie_name.innerHTML = 'Scooby-Doo! Mistério S/A'
            movie_description.innerHTML = 'Scooby-Doo e sua gangue vivem em uma pequena cidade com uma longa história de fantasmas, monstros e outros mistérios prontos para serem solucionados.'
        break;

        case 'serie3':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/series/serie3_3.jpg')"
            movie_name.innerHTML = 'Scooby Doo, Cadê Você?'
            movie_description.innerHTML = 'Fred, Daphne, Velma, Salsicha e Scooby viajam ao redor do mundo, sempre em busca de um mistério a ser resolvido.'
        break;

        case 'serie4':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/series/serie4_4.jpg')"
            movie_name.innerHTML = 'O Show do Scooby-Doo'
            movie_description.innerHTML = 'Um grupo de quatro adolescentes metidos a detetives (Fred, Velma, Daphne e Salsicha) e o cão chamado Scooby-Doo viajam num furgão psicodélico chamado Máquina do Mistério e ajudam a investigar casos misteriosos.'
        break;

        case 'serie5':
            movie_image.style.backgroundImage= "linear-gradient(#000000bd, #00000082), url('images/series/serie5_5.jpg')"
            movie_name.innerHTML = 'Scooby-Doo e Scooby-Loo'
            movie_description.innerHTML = 'Ao contrário do seu tio, Scooby-Loo, muitas vezes tenta assumir a tarefa de capturar o vilão da semana em suas próprias mãos, forçando Salsicha e Scooby para tentar seu melhor teste de coragem sem precisar de Fred, Daphne e Velma.'
        break;

    }
}