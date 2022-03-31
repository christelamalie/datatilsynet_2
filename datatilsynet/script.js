
function submit(){

  event.preventDefault()
  console.log("sendt")

  const svar1 = document.querySelector("input[name=gender]:checked").value;
  console.log(svar1)

  const svar2 = document.querySelector("input[name=age]:checked").value;
  console.log(svar2)

  const svar3 = document.querySelector("input[name=work]:checked").value;
  console.log(svar3)

  const svar4 = document.querySelector("input[name=data]:checked").value;
  console.log(svar4)

  const svar5 = document.querySelector("input[name=visible]:checked").value;
  console.log(svar5)

  const svar6 = document.querySelector("input[name=anmeld]:checked").value;
  console.log(svar6)

  const svar7 = document.querySelector("input[name=gdpr]:checked").value;
  console.log(svar7)

  const svar8 = document.querySelector("input[name=safe]:checked").value;
  console.log(svar8)

  const svar9 = document.querySelector("input[name=tid]:checked").value;
  console.log(svar9)

  const svar10 = document.querySelector("input[name=forhold]:checked").value;
  console.log(svar10)

  const svar11 = document.querySelector("input[name=found]:checked").value;
  console.log(svar11)
}

/*
document
  .getElementById("contact-form")
  .addEventListener("submit", validateForm);
  const templateParams = {};

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // 1st step: Hente alle input felter
  const elements = document.getElementsByClassName("need-validation");
  console.log(elements);
  // 2nd step: loope henover alle input felter
  for (let element of elements) {
    if (element.type == "text" || element.type == "textarea") {
      textValidation(element);
    } else if (element.type == "email") {
      emailValidation(element);
    }
  }}
  
  //check systemet

  function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
} }
  



document
      .getElementById("contact-form")

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // Hive fat i alle elementer hvor className = need-validation"
  const elements = document.getElementsByClassName("need-validation")
  console.log(elements);
  // for loop, for hvert element i elements array'et
  for (let element of elements) {
  // gemmer vi en ny variabel, hvor mellemrumstegn er trimmet væk
  const value = element.value.trim();

  // tester om value er lig med en tom string
  if(value = ""){
    console.log("du har givet tomt input");
    // vi tilføjer error-validation
    element.classList.add("validation-error")
  } else {
    
  }


  }
}

// eksempel til for loops
const games = ["settlers", "harry potter"];

//standard oldschool for loop
for (let i = 0 ; i < games.length ; i++) {
  console.log(games[i]);
}

//den nye mederne måde "for of"- loop
for (let game of games){
console.log(game);
}

// conditions og if/else sætninger
const isAllowed = 28 > 16
console.log(isAllowed)
if (isAllowed) {
  console.log("jeg må godt købe alkohol");
} else {
  console.log("jeg må ikke købe alkohol");
}

// else if
const age = 28
if(age > 18) {
  console.log("jeg må købe alt alkohol")
} else if (age > 16) {
  console.log("jeg må købe mindre spiritus procenter")
} else {
  console.log("jeg må ikke købe alkohol")
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document
    .getElementById("skema")*/