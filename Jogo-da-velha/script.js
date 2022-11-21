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

function changePlayer() {
  if(jogador.textContent == "X"){
    jogador.textContent = "O";
  } else if(jogador.textContent == "O") {
    jogador.textContent = "X";
  }
}

function play(x) {
  x.value = jogador.textContent;
  x.style.color = "black";
  x.disabled = true
  winner()
  changePlayer()
}

function winner() {

  if(a1.value == a2.value && a1.value == a3.value) {
    console.log(`O jogador ${a1.value} venceu!!`)
  } else if(b1.value == b2.value && b1.value == b3.value) {
    console.log(`O jogador ${b1.value} venceu!!`)
  } else if(c1.value == c2.value && c1.value == c3.value) {
    console.log(`O jogador ${c1.value} venceu!!`)
  } else if(a1.value == b2.value && a1.value == c3.value) {
    console.log(`O jogador ${a1.value} venceu!!`)
  } else if(c1.value == b2.value && c1.value == a3.value) {
    console.log(`O jogador ${c1.value} venceu!!`)
  }
}

function endGame() {
  let campos = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

  for (let i = 0; i < campos.length; i++) {
    campos[i].disabled = true
  }
}

function reiniciar() {
  let campos = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

  for (let i = 0; i < campos.length; i++) {
    campos[i].disabled = false
    campos[i].style.color = "white"
    campos[i].value = '_' 
  }


}










  // function winner() {
  //   if(a1.value == 'X' && a2.value == 'X' && a3.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(b1.value == 'X' && b2.value == 'X' && b3.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(c1.value == 'X' && c2.value == 'X' && c3.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a1.value == 'X' && b1.value == 'X' && c1.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a2.value == 'X' && b2.value == 'X' && c2.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a3.value == 'X' && b3.value == 'X' && c3.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a1.value == 'X' && b2.value == 'X' && c3.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a3.value == 'X' && b2.value == 'X' && c1.value == 'X') {
  //     console.log("Jogador 'X' Ganhou!")
  //     endGame()
  //   } else if(a1.value == 'O' && a2.value == 'O' && a3.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(b1.value == 'O' && b2.value == 'O' && b3.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(c1.value == 'O' && c2.value == 'O' && c3.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(a1.value == 'O' && b1.value == 'O' && c1.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(a2.value == 'O' && b2.value == 'O' && c2.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(a3.value == 'O' && b3.value == 'O' && c3.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(a1.value == 'O' && b2.value == 'O' && c3.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   } else if(a3.value == 'O' && b2.value == 'O' && c1.value == 'O') {
  //     console.log("Jogador 'O' Ganhou!")
  //     endGame()
  //   }
  // }
