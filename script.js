let num = document.getElementById('number')
let mostra = document.getElementById('show')
let result = document.getElementById("final")

let list = []

/*function add(){
    let n = num.value
    if(n == 0 || n > 100){
        alert('Digite um número válido!')
    } else {
        list.push(n)
    }

    mostra.innerHTML = '' //para limpar a área de resposta sempre antes de digitar um novo número
    for(let pos in list){
        let item = document.createElement('option')
        item.text = list[pos]
        mostra.appendChild(item)
    }
}*/

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
}

function inList(n, lis){ //esa função recebe um número e um vetor (lista) como parâmentros.
    if(list.indexOf(Number(n)) != -1) { //-1 indica que o valor não foi encontrado na lista
        return true
    }
}

function add(){
    if(isNumber(num.value) && !inList(num.value, list)) {
        list.push(Number(num.value))

        mostra.innerHTML = '' //para limpar a área de resposta sempre antes de digitar um novo número
        for(let pos in list){
            let item = document.createElement('option')
            item.text = `O valor ${list[pos]} foi adicionado.`
            mostra.appendChild(item)
            final.innerHTML = '' //limpa o campo do resultado após finalizar e após add mais números, para iniciar novamente
        }
    } else {
        alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = '' //para apagar os numeros digitados após adicionar. Limpar o input
    num.focus() //foca no local a ser preecnhido
}

function done(){
    if(list.length == 0){
        alert("Adicione números antes de finalizar!")
    } else {
        let quant = list.length

        let soma = 0
        for(let pos in list){
            soma += list[pos]
        }

        let media = soma / quant

        list.sort()
        let maior = list[list.length - 1]
        let menor = list[0]

        let final = document.createElement('p')
        
        final.innerHTML = ''
        final.innerHTML += `Ao todo, temos ${quant} números cadastrados <br>`
        final.innerHTML += `O maior valor informado foi o ${maior} <br>`
        final.innerHTML += `O menor valor informado foi o ${menor} <br>`
        final.innerHTML += `Somando todos os valores, temos ${soma} <br>`
        final.innerHTML += `A média dos valores digitados é ${media.toFixed(2)} <br>`
    
        result.appendChild(final)
    }
}