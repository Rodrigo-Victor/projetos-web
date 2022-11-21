a1 = document.querySelector("#a1");
a2 = document.querySelector("#a2");
a3 = document.querySelector("#a3");
b1 = document.querySelector("#b1");
b2 = document.querySelector("#b2");
b3 = document.querySelector("#b3");
c1 = document.querySelector("#c1");
c2 = document.querySelector("#c2");
c3 = document.querySelector("#c3");
let jogador = document.querySelector("#jogador");

// JOGAR
function play(x) {
  x.value = jogador.textContent;
  x.style.color = "black";
  x.disabled = true
  winner()
  draw()
  changePlayer()
}

// MUDAR O JOGADOR DA VEZ
function changePlayer() {
  if(jogador.textContent == "X"){
    jogador.textContent = "O";
  } else if(jogador.textContent == "O") {
    jogador.textContent = "X";
  }
}

// CONFIRMAR VENCEDOR
function winner() {
  if(a1.value == a2.value && a1.value == a3.value) {
    teste(a1.value)
  }
   if(b1.value == b2.value && b1.value == b3.value) {
    teste(b1.value)
  }
   if(c1.value == c2.value && c1.value == c3.value) {
    teste(c1.value)
  }
   if(a1.value == b2.value && a1.value == c3.value) {
    teste(a1.value)
  }
   if(c1.value == b2.value && c1.value == a3.value) {
    teste(c1.value)
  }
   if(a1.value == b1.value && a1.value == c1.value) {
    teste(a1.value)
  }
   if(a2.value == b2.value && a2.value == c2.value) {
    teste(a2.value)
  }
   if(a3.value == b3.value && a3.value == c3.value) {
    teste(a3.value)
  }
}

// CONFIRMAR EMPATE
function draw() {
  let campos = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
  let cont = 0

  for (let i = 0; i < campos.length; i++) {
    if(campos[i].value != '_') {
      cont++
    }
    if(cont == 9) {
      alert('Empate!')
    }
    console.log(cont)
  }
}

// TRAVAR JOGO CASO TENHA UM VENCEDOR
function endGame() {
  let campos = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

  for (let i = 0; i < campos.length; i++) {
    campos[i].disabled = true
  }
}

// INICIAR UM NOVO JOGO
function reiniciar() {
  let campos = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

  for (let i = 0; i < campos.length; i++) {
    campos[i].disabled = false
    campos[i].style.color = "white"
    campos[i].value = '_' 
  }
}

// TESTE PARA IGNORAR CARACTER QUE NAO SEJA 'X' OU 'O'
function teste(x) {
  if(x != '_') {
    alert(`O jogador ${x} venceu!!`)
    endGame()
  }
}