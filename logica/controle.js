async function testeApi() {
    const conexao = await fetch("./controle.json")

    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida.agenda[0].voga)
}

testeApi()