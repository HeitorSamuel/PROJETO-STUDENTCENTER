let matriculal = document.getElementById("matriculal");
let matriculas = document.getElementById("matriculas");
let nome = document.getElementById("nome");
let email = document.getElementById("email");

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");

let irprahome = document.querySelectorAll(".enviar");

function legal(index){
  if(index === 1)
  {
    span1.innerHTML = "Matricula valida!";
    span1.style.color = "green";
    matriculal.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 2)
  {
    span2.innerHTML = "Matricula valida!";
    span2.style.color = "green";
    matriculas.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 3)
  {
    span3.innerHTML = "Nome valido!";
    span3.style.color = "green";
    nome.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 4)
  {
    span4.innerHTML = "Gmail valido!";
    span4.style.color = "green";
    email.style.boxShadow = "0px 0px 10px green";
  }
}

// -----------------------------------------------------------------------------------------------------------

function ilegal(index){
  if(index === 1)
  {
    span1.innerHTML = "Matricula invalida!";
    span1.style.color = "red";
    matriculal.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 2)
  {
    span2.innerHTML = "Matricula invalida!";
    span2.style.color = "red";
    matriculas.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 3)
  {
    span3.innerHTML = "Nome invalido!";
    span3.style.color = "red";
    nome.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 4)
  {
    span4.innerHTML = "Gmail invalido!";
    span4.style.color = "red";
    email.style.boxShadow = "0px 0px 10px red";
  }
}

// ---------------------------------------------------------------------------------------------------

function matriculalValidate(){
  if(matriculal.value.length == 7)
  {
    legal(1);
  }
  else if(matriculal.value.length <= 6 || matriculal.value.length >= 8)
  {
    ilegal(1);
  }
}

//------------------------------------------------------------------------------------------------------
function matriculasValidate(){
  if(matriculas.value.length == 7)
  {
    legal(2);
  }
  else if(matriculas.value.length <= 6 || matriculas.value.length >= 8)
  {
    ilegal(2);
  }
}

// -----------------------------------------------------------------------------------------------------

function nameValidate(){
  if(nome.value.length > 0 && nome.value.length <= 40)
  {
    legal(3);  
  }
  else
  {
    ilegal(3);
  }
}

// -----------------------------------------------------------------------------------------------------------

function emailValidate(){
  if(emailRegex.test(email.value))
  {
    legal(4);
  }
  else
  {
    ilegal(4);
  }
}



// transacao
function mudar(){
  var trocaL = document.querySelector("#login");
  var trocaS = document.querySelector("#cadastro");
  trocaL.classList.toggle("c_forms_trocaR");
  trocaS.classList.toggle("c_forms_trocaR");
  trocaL.classList.remove("c_forms_trocaL");
  trocaS.classList.remove("c_forms_trocaL");

  var form = document.querySelector(".c_forms");
  form.classList.toggle("c_forms_trocar");
  form.classList.remove("c_forms");
}
function desmudar(){
  var trocaL = document.querySelector("#login");
  var trocaS = document.querySelector("#cadastro");
  trocaL.classList.toggle("c_forms_trocaL");
  trocaS.classList.toggle("c_forms_trocaL");
  trocaL.classList.remove("c_forms_trocaR");
  trocaS.classList.remove("c_forms_trocaR");

  var form = document.querySelector(".c_forms_trocar");
  form.classList.toggle("c_forms");
  form.classList.remove("c_forms_trocar");
}

console.log(irprahome)
