import Countdown from "./countdown.js";

const tempoParaAnoNovo = new Countdown('01 January 2024 00:00:01 ');

// setInterval(() => {
//   console.log(tempoParaOAnoNovo.total);
// }, 1000);


function tempoFalta() {
  const dias = document.querySelector('.dias');
  dias.innerText = `${tempoParaAnoNovo.total.days} dias`
  const horas = document.querySelector('.horas');
  horas.innerText = `${tempoParaAnoNovo.total.hours} horas`
  const minutos = document.querySelector('.minutos');
  minutos.innerText = `${tempoParaAnoNovo.total.minutes} minutos`
  const segundos = document.querySelector('.segundos');
  segundos.innerText = `${tempoParaAnoNovo.total.seconds} segundos`
}

setInterval(tempoFalta, 1000)

