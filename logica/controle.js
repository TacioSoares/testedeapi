var input = document.querySelector('#militar')
var botao = document.querySelector('#botao')

botao.addEventListener("click", async function(){
    await criaVoga(input.value)
})

async function testeApi() {
    const conexao = await fetch("./controle.json")

    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida.agenda[0].voga)
}

testeApi()

async function criaVoga(militar) {
    const conexao = await fetch("http://localhost:3000/agenda",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            dia: 3,
            voga: militar
        })
    })
    const conexaoConvertida = await conexao.json()
    return conosole.log(conexaoConvertida)
}

