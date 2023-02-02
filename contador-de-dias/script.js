// CALCULAR A DIFERENÇA ENTRE DATAS
function calcDiff(Y,M,D) {
  const choicedDate = new Date(Y,M - 1,D);
  const currentDate = new Date();
  let diffInSeconds = (choicedDate - currentDate) / 1000;

  valY(diffInSeconds)

  const diffDays = Math.floor(diffInSeconds / 60 / 60 / 24);
  const diffHours = Math.floor((diffInSeconds / 60 / 60) % 24);
  const diffMin = Math.floor((diffInSeconds / 60 ) % 60);
  const diffSec = Math.floor(diffInSeconds % 60);

  showDiff(diffDays, diffHours, diffMin, diffSec)
}

// MOSTRAR NOVA DATA
function showDiff(d,h,m,s) {
  let showDays = document.querySelector("#nDays");
  let showHours = document.querySelector("#nHours");
  let showMin = document.querySelector("#nMin");
  let showSec = document.querySelector("#nSec");

  showDays.textContent = d > 9999 ? d = 9999+"+": d = d
  showHours.textContent = h
  showMin.textContent = m
  showSec.textContent = s
}

// COLETAR DADOS DA DATA ESCOLHIDA
function choiceDate() {
  let year = document.querySelector("#cYear");
  let month = document.querySelector("#cMonth");
  let day = document.querySelector("#cDay");

  setInterval(() => calcDiff(year.value, month.value, day.value),1000)
}

// VALIDAÇÕES
function valM() {
  let elem = document.querySelector("#cMonth")

  if(elem.value.length == 1) {
    elem.value = "0" + elem.value
  }

  if(elem.value < 1 || elem.value == "") {
    elem.value = '01'
  }

  if(elem.value > 12) {
    elem.value = 12
  }
} 

function valD() {
  let elem = document.querySelector("#cDay")

  if(elem.value.length == 1) {
    elem.value = "0" + elem.value
  }

  if ( elem.value < 1 || elem.value == "") {
    elem.value = '01'
  }

  if(elem.value > 31) {
    elem.value = '31'
  }
};

function valY (diff) {
  let showError = document.querySelector(".showError")
  let showDiff = document.querySelector(".showDiff")

  if(diff<=0) {
    showDiff.style.display = "none"
    showError.style.display = "block"
  } else {
    showDiff.style.display = "flex"
    showError.style.display = "none"
  }
}

function clean(elem) {
  elem.value = ""
}

setInterval(() => valD(),8000)
setInterval(() => valM(),8000)