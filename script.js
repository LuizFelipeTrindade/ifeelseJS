let idade = document.getElementById('num1')
let result = document.getElementById('res')

function calcular() {
    let ida = Number(idade.value)
    if(ida < 16) {
        result.innerHTML = `Você tem ${ida} anos ou seja... Não vota`
    } else if (ida >= 18) {
        result.innerHTML = `Você tem ${ida} anos ou seja...Obrigatório`
    } if(ida >= 16 || ida >= 65) {
        result.innerHTML = `Você tem ${ida} anos ou seja...Opcional`
    }
}