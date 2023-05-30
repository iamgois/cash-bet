const vermelho = document.getElementById('vermelho');
const preto = document.getElementById('preto');
const resultado = document.getElementById('resultado');
const cores = ['vermelho', 'preto'];
const valor = document.getElementById('valor');

let pot = 10
valor.innerHTML = pot


/* Botões */

vermelho.addEventListener('click', () => {

    /* Valores */
    pot -= 1

    const num = Math.random().toFixed(0)
    resultado.classList.add('opacity')

    setInterval(function () { resultado.classList.remove('opacity') }, 1000);

    if (num == 0) {
        pot += 2
        valor.innerHTML = pot
    } else {
        valor.innerHTML = pot
    }


    return resultado.innerHTML = cores[num]
})

preto.addEventListener('click', () => {

    /* Valores */
    pot -= 1

    const num = Math.random().toFixed(0)
    resultado.classList.add('opacity')

    setInterval(function () { resultado.classList.remove('opacity') }, 1000);

    if (num == 1) {
        pot += 2
        valor.innerHTML = pot
    } else {
        valor.innerHTML = pot
    }

    return resultado.innerHTML = cores[num]
})