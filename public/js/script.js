// let matriculal = document.getElementById("matriculal");
// let matriculas = document.getElementById("matriculas");
// let nome = document.getElementById("nome");
// let email = document.getElementById("email");

// const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// let span1 = document.getElementById("span1");
// let span2 = document.getElementById("span2");
// let span3 = document.getElementById("span3");
// let span4 = document.getElementById("span4");

// let irprahome = document.querySelectorAll(".enviar");

// function legal(index){
//   if(index === 1)
//   {
//     span1.innerHTML = "Matricula valida!";
//     span1.style.color = "green";
//     matriculal.style.boxShadow = "0px 0px 10px green";
//   }
//   else if(index === 2)
//   {
//     span2.innerHTML = "Matricula valida!";
//     span2.style.color = "green";
//     matriculas.style.boxShadow = "0px 0px 10px green";
//   }
//   else if(index === 3)
//   {
//     span3.innerHTML = "Nome valido!";
//     span3.style.color = "green";
//     nome.style.boxShadow = "0px 0px 10px green";
//   }
//   else if(index === 4)
//   {
//     span4.innerHTML = "Gmail valido!";
//     span4.style.color = "green";
//     email.style.boxShadow = "0px 0px 10px green";
//   }
// }

// // -----------------------------------------------------------------------------------------------------------

// function ilegal(index){
//   if(index === 1)
//   {
//     span1.innerHTML = "Matricula invalida!";
//     span1.style.color = "red";
//     matriculal.style.boxShadow = "0px 0px 10px red";
//   }
//   else if(index === 2)
//   {
//     span2.innerHTML = "Matricula invalida!";
//     span2.style.color = "red";
//     matriculas.style.boxShadow = "0px 0px 10px red";
//   }
//   else if(index === 3)
//   {
//     span3.innerHTML = "Nome invalido!";
//     span3.style.color = "red";
//     nome.style.boxShadow = "0px 0px 10px red";
//   }
//   else if(index === 4)
//   {
//     span4.innerHTML = "Gmail invalido!";
//     span4.style.color = "red";
//     email.style.boxShadow = "0px 0px 10px red";
//   }
// }

// // ---------------------------------------------------------------------------------------------------

// function matriculalValidate(){
//   if(matriculal.value.length == 7)
//   {
//     legal(1);
//   }
//   else if(matriculal.value.length <= 6 || matriculal.value.length >= 8)
//   {
//     ilegal(1);
//   }
// }

// //------------------------------------------------------------------------------------------------------
// function matriculasValidate(){
//   if(matriculas.value.length == 7)
//   {
//     legal(2);
//   }
//   else if(matriculas.value.length <= 6 || matriculas.value.length >= 8)
//   {
//     ilegal(2);
//   }
// }

// // -----------------------------------------------------------------------------------------------------

// function nameValidate(){
//   if(nome.value.length > 0 && nome.value.length <= 40)
//   {
//     legal(3);  
//   }
//   else
//   {
//     ilegal(3);
//   }
// }

// // -----------------------------------------------------------------------------------------------------------

// function emailValidate(){
//   if(emailRegex.test(email.value))
//   {
//     legal(4);
//   }
//   else
//   {
//     ilegal(4);
//   }
// }



// // transacao
// function mudar(){
//   var trocaL = document.querySelector("#login");
//   var trocaS = document.querySelector("#cadastro");
//   trocaL.classList.toggle("c_forms_trocaR");
//   trocaS.classList.toggle("c_forms_trocaR");
//   trocaL.classList.remove("c_forms_trocaL");
//   trocaS.classList.remove("c_forms_trocaL");

//   var form = document.querySelector(".c_forms");
//   form.classList.toggle("c_forms_trocar");
//   form.classList.remove("c_forms");
// }
// function desmudar(){
//   var trocaL = document.querySelector("#login");
//   var trocaS = document.querySelector("#cadastro");
//   trocaL.classList.toggle("c_forms_trocaL");
//   trocaS.classList.toggle("c_forms_trocaL");
//   trocaL.classList.remove("c_forms_trocaR");
//   trocaS.classList.remove("c_forms_trocaR");

//   var form = document.querySelector(".c_forms_trocar");
//   form.classList.toggle("c_forms");
//   form.classList.remove("c_forms_trocar");
// }

// console.log(irprahome)

// variasveis do aluno
let matriculal = document.getElementById("matriculal");
let matriculas = document.getElementById("matriculas");
let nome = document.getElementById("nome");
let email = document.getElementById("email");

// variaveis do professor
let nomeProfessorl = document.getElementById("nomeProfessorLogin");
let nomeProfessors = document.getElementById("nomeProfessorCadastro");
let senhaProfessorCadastro = document.getElementById("senhaProfessorCadastro");
let confirmarSenha = document.getElementById("confirmarSenha");
let senhaProfessorLogin = document.getElementById("senhaProfessorLogin");

// variavesi globais
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;


let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let span5 = document.getElementById("span5");
let span6 = document.getElementById("span6");
let span7 = document.getElementById("span7");
let span8 = document.getElementById("span8");
let span9 = document.getElementById("span9");

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
  else if(index === 5)
  {
    span5.innerHTML = "Nome valido!";
    span5.style.color = "green";
    nomeProfessors.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 6)
  {
    span6.innerHTML = "Senha valida!";
    span6.style.color = "green";
    senhaProfessorCadastro.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 7)
  {
    span7.innerHTML = "Senhas iguais!";
    span7.style.color = "green";
    confirmarSenha.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 8)
  {
    span8.innerHTML = "Nome valido!";
    span8.style.color = "green";
    nomeProfessorl.style.boxShadow = "0px 0px 10px green";
  }
  else if(index === 9)
  {
    span9.innerHTML = "Senha valida!";
    span9.style.color = "green";
    senhaProfessorLogin.style.boxShadow = "0px 0px 10px green";
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
  else if(index === 5)
  {
    span5.innerHTML = "Nome invalido!";
    span5.style.color = "red";
    nomeProfessors.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 6)
  {
    span6.innerHTML = "senha precisa de 8 digitos e caracteres especiais, maiusculos, minusculos e numerais!";
    span6.style.color = "red";
    senhaProfessorCadastro.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 7)
  {
    span7.innerHTML = "senhas diferentes!";
    span7.style.color = "red";
    confirmarSenha.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 8)
  {
    span8.innerHTML = "Nome invalido!";
    span8.style.color = "red";
    nomeProfessorl.style.boxShadow = "0px 0px 10px red";
  }
  else if(index === 9)
  {
    span9.innerHTML = "senha precisa de 8 digitos e caracteres especiais, maiusculos, minusculos e numerais!";
    span9.style.color = "red";
    senhaProfessor.style.boxShadow = "0px 0px 10px red";
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

// -----------------------------------------------------------------------------------------------------------

function nomePSvalidate(){
  if(nomeProfessors.value.length > 0 && nomeProfessors.value.length <= 40)
    {
      legal(5);  
    }
    else
    {
      ilegal(5);
    }
}

// -----------------------------------------------------------------------------------------------------------

function senhaPSvalidate(){
  if(senhaRegex.test(senhaProfessorCadastro.value))
    {
      legal(6);
    }
    else
    {
      ilegal(6);
    }
}

// -----------------------------------------------------------------------------------------------------------

function confirmarSenhaValidate(){
  if(senhaProfessorCadastro.value === confirmarSenha.value)
  {
    legal(7);
  }
  else
  {
    ilegal(7);
  }
}

// -----------------------------------------------------------------------------------------------------------

function nomePLvalidate(){
  if(nomeProfessorl.value.length > 0 && nomeProfessorl.value.length <= 40)
    {
      legal(8);  
    }
    else
    {
      ilegal(8);
    }
}

// -----------------------------------------------------------------------------------------------------------

function senhaPLvalidate(){
  if(senhaRegex.test(senhaProfessorLogin.value))
    {
      legal(9);
    }
    else
    {
      ilegal(9);
    }
}


// declaracao de variaveis para transicao de paginas
let trocaL = document.querySelector("#login");
let trocaS = document.querySelector("#cadastro");

let trocaL1 = document.querySelector("#loginP");
let trocaS1 = document.querySelector("#cadastroP");

let form = document.querySelector(".c_forms");

let escolha = document.querySelector("#escolha");
let botaoinicial = document.querySelector("#voltarpratela")
// escolha de professor ou aluno
function mudarparaestudante(){
  trocaL.classList.toggle("mudancaparaestudante");
  trocaS.classList.toggle("mudancaparaestudante");
  trocaL1.classList.toggle("mudancaparaestudante");
  trocaS1.classList.toggle("mudancaparaestudante");
  escolha.classList.toggle("mudancaparaestudante");
  form.classList.toggle("forms_estudante");

  trocaL.classList.remove("c_forms_trocaL");
  trocaS.classList.remove("c_forms_trocaL");
  trocaL1.classList.remove("c_forms_trocaL");
  trocaS1.classList.remove("c_forms_trocaL");
  escolha.classList.remove("c_forms_trocaL");
  form.classList.remove("c_forms");
}
function mudarparaprofessor(){
  trocaL.classList.toggle("mudancaparaprofessor");
  trocaS.classList.toggle("mudancaparaprofessor");
  trocaL1.classList.toggle("mudancaparaprofessor");
  trocaS1.classList.toggle("mudancaparaprofessor");
  escolha.classList.toggle("mudancaparaprofessor");
  form.classList.toggle("forms_professor");

  trocaL.classList.remove("c_forms_trocaL");
  trocaS.classList.remove("c_forms_trocaL");
  trocaL1.classList.remove("c_forms_trocaL");
  trocaS1.classList.remove("c_forms_trocaL");
  escolha.classList.remove("c_forms_trocaL");
  form.classList.remove("c_forms");
}


// transacao aluno
function cadastroAluno(){
  trocaL.classList.toggle("c_forms_trocaR");
  trocaS.classList.toggle("c_forms_trocaR");
  trocaL1.classList.toggle("c_forms_trocaR");
  trocaS1.classList.toggle("c_forms_trocaR");
  escolha.classList.toggle("c_forms_trocaR");
  form.classList.toggle("c_forms_trocar");

  trocaL.classList.remove("mudancaparaestudante");
  trocaS.classList.remove("mudancaparaestudante");
  trocaL1.classList.remove("mudancaparaestudante");
  trocaS1.classList.remove("mudancaparaestudante");
  escolha.classList.remove("mudancaparaestudante") 
  form.classList.remove("forms_aluno");
}
function loginAluno(){
  trocaL.classList.toggle("mudancaparaestudante");
  trocaS.classList.toggle("mudancaparaestudante");
  trocaL1.classList.toggle("mudancaparaestudante");
  trocaS1.classList.toggle("mudancaparaestudante");
  escolha.classList.toggle("mudancaparaestudante");
  form.classList.toggle("forms_aluno");

  trocaL.classList.remove("c_forms_trocaR");
  trocaS.classList.remove("c_forms_trocaR");
  trocaL1.classList.remove("c_forms_trocaR");
  trocaS1.classList.remove("c_forms_trocaR");
  escolha.classList.remove("c_forms_trocaR") 
  form.classList.remove("c_forms_trocar");
}

//transacao professor
function cadastroProfessor(){
  trocaL.classList.toggle("c_forms_cadastrop");
  trocaS.classList.toggle("c_forms_cadastrop");
  trocaL1.classList.toggle("c_forms_cadastrop");
  trocaS1.classList.toggle("c_forms_cadastrop");
  escolha.classList.toggle("c_forms_cadastrop");
  form.classList.toggle("c_forms_trocar_professor");

  trocaL.classList.remove("mudancaparaprofessor");
  trocaS.classList.remove("mudancaparaprofessor");
  trocaL1.classList.remove("mudancaparaprofessor");
  trocaS1.classList.remove("mudancaparaprofessor");
  escolha.classList.remove("mudancaparaprofessor") 
  form.classList.remove("forms_professor");
}
function loginProfessor(){
  trocaL.classList.toggle("mudancaparaprofessor");
  trocaS.classList.toggle("mudancaparaprofessor");
  trocaL1.classList.toggle("mudancaparaprofessor");
  trocaS1.classList.toggle("mudancaparaprofessor");
  escolha.classList.toggle("mudancaparaprofessor");
  form.classList.toggle("forms_professor");

  trocaL.classList.remove("c_forms_cadastrop");
  trocaS.classList.remove("c_forms_cadastrop");
  trocaL1.classList.remove("c_forms_cadastrop");
  trocaS1.classList.remove("c_forms_cadastrop");
  escolha.classList.remove("c_forms_cadastrop") 
  form.classList.remove("c_forms_trocar_professor");
}


function voltarpratela(x){
  if(x === 1){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");
    
    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 2){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 3){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 4){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 5){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 6){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 7){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 8){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
  else if(x === 9){
    trocaL.classList.toggle("c_forms_trocaL");
    trocaS.classList.toggle("c_forms_trocaL");
    trocaL1.classList.toggle("c_forms_trocaL");
    trocaS1.classList.toggle("c_forms_trocaL");
    escolha.classList.toggle("c_forms_trocaL");
    form.classList.toggle("c_forms");

    trocaL.classList.remove("c_forms_cadastrop");
    trocaS.classList.remove("c_forms_cadastrop");
    trocaL1.classList.remove("c_forms_cadastrop");
    trocaS1.classList.remove("c_forms_cadastrop");
    escolha.classList.remove("c_forms_cadastrop");
    form.classList.remove("c_forms_trocar_professor");
  }
}