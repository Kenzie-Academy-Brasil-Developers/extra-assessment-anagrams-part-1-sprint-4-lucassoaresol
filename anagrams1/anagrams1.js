function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim()
}

const button = document.getElementById("findButton")
    button.addEventListener("click", function () {
        let anagramas = []
        let typedText = document.getElementById("input").value
        anagramas = getAnagramsOf(typedText)
        for (let i=0;i<anagramas.length;i++){
            document.body.appendChild(criarH2(anagramas[i]))
        }
});

function criarH2(valor){
    let tagH2 = document.createElement('h2')
    tagH2.innerText = valor
    return tagH2
}

function getAnagramsOf(valor){
    let resultado = []
    for (let i=0;i<palavras.length;i++){
        if(alphabetize(valor) == alphabetize(palavras[i])){
            resultado.push(palavras[i])
        }
    }
    return resultado
}