var elementos = document.querySelectorAll('.player-options div > img')
var playerOpt = ""


function validarVitoria(){

    let vencedor = document.querySelector('.vencedor')

    if(playerOpt == 'papel'){
        
        if(inimigoOpt == 'papel'){
            //empate
            vencedor.innerHTML = "O jogo empatou!"
        }else if(inimigoOpt == 'tesoura'){
            //inimigo ganhou
            vencedor.innerHTML = "Voce foi de arrasta pra cima!"
        }else if(inimigoOpt = 'pedra'){
            //player ganhou
            vencedor.innerHTML = "Ponto para o time dos homens!"
        }

    }

    if(playerOpt == 'pedra'){
        
        if(inimigoOpt == 'pedra'){
            //empate
            vencedor.innerHTML = "O jogo empatou!"
        }else if(inimigoOpt == 'papel'){
            //inimigo ganhou
            vencedor.innerHTML = "Voce foi de arrasta pra cima!"
        }else if(inimigoOpt = 'tesoura'){
            //player ganhou
            vencedor.innerHTML = "Ponto para o time dos homens!"
        }

    }

    if(playerOpt == 'tesoura'){
        
        if(inimigoOpt == 'tesoura'){
            //empate
            vencedor.innerHTML = "O jogo empatou!"
        }else if(inimigoOpt == 'pedra'){
            //inimigo ganhou
            vencedor.innerHTML = "Voce foi de arrasta pra cima!"
        }else if(inimigoOpt = 'papel'){
            //player ganhou
            vencedor.innerHTML = "Ponto para o time dos homens!"
        }

    }
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    resetInimigo();

    for(var i = 0; i < enemyOptions.length; i++){
        if (i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }


    validarVitoria()
    
}



for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',(t)=>{
        resetOpacityPlayer()
        t.target.style.opacity = 1;

        playerOpt = t.target.getAttribute('opt');


        inimigoJogar()
        
        

    })
}