const intervalo = setInterval(()=>{
    const header = document.querySelector("._2O84H");
    if (header) {
        console.log(header)
        clearInterval(intervalo)

        const botaoVelocidade = document.createElement("button")
        botaoVelocidade.innerHTML = "2x"
        botaoVelocidade.classList.add("botaoVelocidade")

        botaoVelocidade.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            console.log(audios)
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2;
            })
        })

        header.appendChild(botaoVelocidade)
    }
})