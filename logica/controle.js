async function testeApi() {
    const conexao = await fetch("http://localhost:3000/agenda")

    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida[0].dia)
}

testeApi()