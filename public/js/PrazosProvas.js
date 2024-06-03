
// function irprahome() {
//   window.location.href = "../pagdehome/homepage.html";
// }
// document.addEventListener("DOMContentLoaded", function() {
//   var tb = document.getElementById("idtable").getElementsByTagName('tbody')[0];
//   var selectedRow = null;

//   function adicionarNaTabela() {
//     var data = document.getElementById('txtdata').value;
//     var assunto = document.getElementById('txtassunto').value;
//     var nota = document.getElementById('txtnota').value;

//     var newRow = tb.insertRow();
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);
//     var cell4 = newRow.insertCell(3);

//     cell1.innerHTML = data;
//     cell2.innerHTML = assunto;
//     cell3.innerHTML = nota;
//     cell4.innerHTML = '<button onclick="editarLinha(this)">Editar</button> <button onclick="deletarLinha(this)">Excluir</button>';

//     limparFormulario();
//   }

//   function editarLinha(button) {
//     selectedRow = button.parentElement.parentElement;
//     document.getElementById('txtdata').value = selectedRow.cells[0].innerHTML;
//     document.getElementById('txtassunto').value = selectedRow.cells[1].innerHTML;
//     document.getElementById('txtnota').value = selectedRow.cells[2].innerHTML;
//   }

//   function salvarNaTabela() {
//     if (selectedRow != null) {
//       selectedRow.cells[0].innerHTML = document.getElementById('txtdata').value;
//       selectedRow.cells[1].innerHTML = document.getElementById('txtassunto').value;
//       selectedRow.cells[2].innerHTML = document.getElementById('txtnota').value;
//       editarNaTabela();
//       limparFormulario();
//       selectedRow = null;
//     }
//   }

//   function excluirDaTabela() {
//     if (selectedRow != null) {
//       tb.deleteRow(selectedRow.rowIndex - 1);
//       excluirNaTabela();
//       limparFormulario();
//       selectedRow = null;
//     }
//   }

//   function limparFormulario() {
//     document.getElementById('txtdata').value = '';
//     document.getElementById('txtassunto').value = '';
//     document.getElementById('txtnota').value = '';
//   }

//   function editarNaTabela() {
//     var data = document.getElementById('txtdata').value;
//     var assunto = document.getElementById('txtassunto').value;
//     var nota = document.getElementById('txtnota').value;

//     fetch(`/editarDados/${data}/${assunto}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ txtnota: nota })
//     })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Erro:', error);
//     });
//   }

//   function excluirNaTabela() {
//     var data = document.getElementById('txtdata').value;
//     var assunto = document.getElementById('txtassunto').value;

//     fetch(`/deletarDados/${data}/${assunto}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Erro:', error);
//     });
//   }

//   function carregarDados() {
//     fetch('/obterDados')
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(item => {
//         var newRow = tb.insertRow();
//         var cell1 = newRow.insertCell(0);
//         var cell2 = newRow.insertCell(1);
//         var cell3 = newRow.insertCell(2);
//         var cell4 = newRow.insertCell(3);

//         cell1.innerHTML = item.txtdata;
//         cell2.innerHTML = item.txtassunto;
//         cell3.innerHTML = item.txtnota;
//         cell4.innerHTML = '<button onclick="editarLinha(this)">Editar</button> <button onclick="deletarLinha(this)">Excluir</button>';
//       });
//     })
//     .catch(error => {
//       console.error('Erro ao carregar os dados:', error);
//     });
//   }

//   window.onload = carregarDados;

//   // Expondo as funções para serem acessíveis no HTML
//   window.adicionarNaTabela = adicionarNaTabela;
//   window.salvarNaTabela = salvarNaTabela;
//   window.excluirDaTabela = excluirDaTabela;
//   window.editarLinha = editarLinha;
// });
 function irprahome() {
  window.location.href = "../pagdehome/homepage.html";
 }
async function fetchDados() {
  const response2 = await fetch('/PrazoProvas');
  const dados2 = await response2.json();
  const tabela2 = document.getElementById('tabelaD');
  tabela2.innerHTML = '';
  dados2.forEach(dado2 => {
      const newRow2 = tabela2.insertRow();
      newRow2.insertCell(0).innerText = dado2.txtdata1;
      newRow2.insertCell(1).innerText = dado2.txtassunto1;
      newRow2.insertCell(2).innerText = dado2.txttaxa1;
      newRow2.insertCell(3).innerText = dado2.txtacesso;
      newRow2.onclick = () => preencherFormulario(dado2);
  });
}

function preencherFormulario(dado2) {
  document.getElementById('txtdata1').value = dado2.txtdata1;
  document.getElementById('txtassunto1').value = dado2.txtassunto1;
  document.getElementById('txttaxa1').value = dado2.txttaxa1;
  document.getElementById('txtacesso').value = dado2.txtacesso;
}

async function cadTable() {
  const txtdata2 = document.getElementById('txtdata1').value;
  const txtassunto2 = document.getElementById('txtassunto1').value;
  const txttaxa2 = document.getElementById('txttaxa1').value;
  const txtacesso = document.getElementById('txtacesso').value;
  const response2 = await fetch('/PrazoProvas', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtdata1: txtdata2, txtassunto1: txtassunto2, txttaxa1: txttaxa2, txtacesso: txtacesso })
  });
  if (response2.ok) {
      fetchDados();
  }
}

async function editTable() {
  const txtdata2 = document.getElementById('txtdata1').value;
  const txtassunto2 = document.getElementById('txtassunto1').value;
  const txttaxa2 = document.getElementById('txttaxa1').value;
  const txtacesso = document.getElementById('txtacesso').value;
  const response2 = await fetch(`/PrazoProvas/${txtassunto2}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtdata1: txtdata2, txtassunto1: txtassunto2, txttaxa1: txttaxa2, txtacesso: txtacesso })
  });
  if (response2.ok) {
      fetchDados();
  }
}

async function excluirTable() {
  const txtassunto2 = document.getElementById('txtassunto1').value;
  const response2 = await fetch(`/PrazoProvas/${txtassunto2}`, {
      method: 'DELETE'
  });
  if (response2.ok) {
      fetchDados();
  }
}

window.onload = fetchDados;
