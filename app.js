const vermelho = document.getElementById('vermelho');
const preto = document.getElementById('preto');
const branco = document.getElementById('branco');
const title = document.getElementById('title');
const buttons = document.getElementById('buttons');

const resultado = document.getElementById('resultado');
const valor = document.getElementById('valor');

const vitoria = document.getElementById('vitoria');

let pot = 10;
valor.innerHTML = pot

vermelho.addEventListener('click', () => {
    if(pot > 0){
        localStorage.setItem('Cor', 'Vermelho');
        resultado.innerHTML = ''
        vitoria.innerHTML = ''
        buttons.style.display = 'none';
        title.style.display = 'none';
        realizarSorteio();
        pot -= 1;
        return valor.innerHTML = pot;
    } else{
        vitoria.innerHTML = `Saldo insuficiente`
    }
})

preto.addEventListener('click', () => {
    if(pot > 0){
        localStorage.setItem('Cor', 'Preto');
        resultado.innerHTML = ''
        vitoria.innerHTML = ''
        buttons.style.display = 'none';
        title.style.display = 'none';
        realizarSorteio();
        pot -= 1;
        return valor.innerHTML = pot;
    } else{
        vitoria.innerHTML = 'Saldo insuficiente'
    }
})
branco.addEventListener('click', () => {
    if(pot > 0){
        localStorage.setItem('Cor', 'Branco');
        resultado.innerHTML = ''
        vitoria.innerHTML = ''
        buttons.style.display = 'none';
        title.style.display = 'none';
        realizarSorteio();
        pot -= 1;
        return valor.innerHTML = pot;
    } else{
        vitoria.innerHTML = 'Saldo insuficiente'
    }
})

function realizarSorteio() {
  // Gera um número aleatório de 0 a 100
  const numero = Math.floor(Math.random() * 101);

  let cor;

  if (numero === 100) {
    cor = 'Branco';
  } else if (numero % 2 === 0) {
    cor = 'Vermelho';
  } else {
    cor = 'Preto';
  }

  // Exibe o contador de 5 segundos
  let contador = 5;
  const interval = setInterval(() => {
    console.log(`Contagem regressiva: ${contador} segundo(s)`);
    resultado.innerHTML = contador
    contador--;

    if (contador === -1) {
      clearInterval(interval);
      exibirResultado(numero, cor);
    }
  }, 1000);
}

function exibirResultado(numero, cor) {
    buttons.style.display = 'initial';
    title.style.display = 'block';

  console.log(`O número sorteado foi ${numero}, cor: ${cor}`);
  if(cor === localStorage.getItem('Cor')){
    console.log('Você ganhou!')
    vitoria.innerHTML = `Parabéns, você ganhou!`
    pot += 2
    if(cor === 'Branco'){
        pot += 8
        valor.innerHTML = pot
    }
    valor.innerHTML = pot
} else{
    console.log('Não foi dessa vez!')
    vitoria.innerHTML = `Não foi dessa vez!`
  }
  resultado.innerHTML = `${cor}`
}