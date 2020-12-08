const intervalo = setInterval(()=>{

    //Constante para pegar a tag header, onde vou adicionar o botão de 2x
    const header = document.querySelector("header");

    //Se encontrar o header eu entro aqui
    if (header) {
        console.log(header)

        //E paro o intervalo da busca pelo elemento
        clearInterval(intervalo)

        //Crio um elemento do botão
        const botaoVelocidade = document.createElement("button")
        botaoVelocidade.title = "Velocidade Áudio"
        botaoVelocidade.innerHTML = "2x"
        botaoVelocidade.classList.add("botaoVelocidade")

        //Faço que o click dele modifique a propriedade playbackRate para 2 (2x)
        botaoVelocidade.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            console.log(audios)

            //Para cada áudio eu verifico qual está configurado no momento
            audios.forEach((audio) => {
                console.log(audio)
                if (audio.playbackRate == 1) {
                    //Chegou na velocidade 1, mudo o texto para 1x e a velocidade para 2x
                    botaoVelocidade.innerHTML = "1x";
                    audio.playbackRate = 2;
                } else {
                    //Chegou na velocidade 2, mudo o texto para 2x e a velocidade para 1x
                    botaoVelocidade.innerHTML = "2x";
                    audio.playbackRate = 1;
                }
            })
        })

        //Adiciono o botão no header
        header.appendChild(botaoVelocidade)
    }
})