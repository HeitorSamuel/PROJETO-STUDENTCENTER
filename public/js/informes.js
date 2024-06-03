function irprahome() {
  window.location.href = "../pagdehome/homepage.html";
}
// var tb, index;

// function cadTable(prof, sobre) {

//   tb = document.getElementById("idtable");
//   var qtdLinhas = tb.rows.length;
//   var linha = tb.insertRow(qtdLinhas);

//   var cellPROF = linha.insertCell(0);
//   var cellSOBRE = linha.insertCell(1);

//   cellPROF.innerHTML = prof;
//   cellSOBRE.innerHTML = sobre;

//   preeencheCamposForm();

// }

// function altTabelaATV(prof, sobre) {

//   tb.rows[index].cells[0].innerHTML = prof;
//   tb.rows[index].cells[1].innerHTML = sobre;
// }

// function preeencheCamposForm() {
//   for (var i = 0; i < tb.rows.length; i++) {
//     tb.rows[i].onclick = function() {
//       index = this.rowIndex;
//       document.getElementById("txtprof").value = tb.rows[index].cells[0].innerText;
//       document.getElementById("txtsobre").value = tb.rows[index].cells[1].innerText;
//     }
//   }
// }

// function delRegistro() {
//   for (var i = 0; i < tb.rows.length; i++) {
//     if (index == i) {
//       tb.deleteRow(index);
//       return;
//     }

//   }
// }

// function preencherFormulario(dado2) {
//   document.getElementById('txtdata1').value = dado2.txtdata1;
//   document.getElementById('txtassunto1').value = dado2.txtassunto1;
//   document.getElementById('txttaxa1').value = dado2.txttaxa1;
//   document.getElementById('txtacesso').value = dado2.txtacesso;
// }

// async function cadTable() {
//   const txtdata2 = document.getElementById('txtdata1').value;
//   const txtassunto2 = document.getElementById('txtassunto1').value;
//   const txttaxa2 = document.getElementById('txttaxa1').value;
//   const txtacesso = document.getElementById('txtacesso').value;
//   const response2 = await fetch('/PrazoProvas', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ txtdata1: txtdata2, txtassunto1: txtassunto2, txttaxa1: txttaxa2, txtacesso: txtacesso })
//   });
//   if (response2.ok) {
//       fetchDados();
//   }
// }

// async function editTable() {
//   const txtdata2 = document.getElementById('txtdata1').value;
//   const txtassunto2 = document.getElementById('txtassunto1').value;
//   const txttaxa2 = document.getElementById('txttaxa1').value;
//   const txtacesso = document.getElementById('txtacesso').value;
//   const response2 = await fetch(`/PrazoProvas/${txtassunto2}`, {
//       method: 'PUT',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ txtdata1: txtdata2, txtassunto1: txtassunto2, txttaxa1: txttaxa2, txtacesso: txtacesso })
//   });
//   if (response2.ok) {
//       fetchDados();
//   }
// }

// async function excluirTable() {
//   const txtassunto2 = document.getElementById('txtassunto1').value;
//   const response2 = await fetch(`/PrazoProvas/${txtassunto2}`, {
//       method: 'DELETE'
//   });
//   if (response2.ok) {
//       fetchDados();
//   }
// }

// window.onload = fetchDados;



// async function fetchDados() {
//   const response3 = await fetch('/Informes');
//   const dados3 = await response3.json();
//   const tabela3 = document.getElementById('InformesDados');
//   tabela3.innerHTML = '';
//   dados3.forEach(dado3 => {
//       const row3 = tabela3.insertRow();
//       row3.insertCell(0).innerText = dado3.txtprof;
//       row3.insertCell(1).innerText = dado3.txtsobre;
//       row3.onclick = () => preencherFormulario(dado3);
//   });
// }

// function preencherFormulario(dado3) {
//   document.getElementById('txtprof').value = dado3.txtprof;
//   document.getElementById('txtsobre').value = dado3.txtsobre;
// }

// async function cadInforms() {
//   const txtprof = document.getElementById('txtprof').value;
//   const txtsobre = document.getElementById('txtsobre').value;
//   const response3 = await fetch('/Informes', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ txtprof, txtsobre })
//   });
//   if (response3.ok) {
//       fetchDados();
//   }
// }

// async function editInforms() {
//   const txtprof = document.getElementById('txtprof').value;
//   const txtsobre = document.getElementById('txtsobre').value;
//   const response3 = await fetch(`/Informes/${txtsobre}`, {
//       method: 'PUT',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ txtprof })
//   });
//   if (response3.ok) {
//       fetchDados();
//   }
// }

// async function excluirInforms() {
//   const txtsobre = document.getElementById('txtsobre').value;
//   const response3 = await fetch(`/Informes/${txtsobre}`, {
//       method: 'DELETE'
//   });
//   if (response3.ok) {
//       fetchDados();
//   }
// }

// window.onload = fetchDados;

async function fetchDados() {
  const response3 = await fetch('/Informes');
  const dados3 = await response3.json();
  const tabela3 = document.getElementById('InformesDados');
  tabela3.innerHTML = '';
  dados3.forEach(dado3 => {
      const row3 = tabela3.insertRow();
      row3.insertCell(0).innerText = dado3.txtprof;
      row3.insertCell(1).innerText = dado3.txtsobre;
      row3.onclick = () => preencherFormulario(dado3);
  });
}

function preencherFormulario(dado3) {
  document.getElementById('txtprof').value = dado3.txtprof;
  document.getElementById('txtsobre').value = dado3.txtsobre;
}

async function cadInforms() {
  const txtprof = document.getElementById('txtprof').value;
  const txtsobre = document.getElementById('txtsobre').value;
  const response3 = await fetch('/Informes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtprof, txtsobre })
  });
  if (response3.ok) {
      fetchDados();
  }
}

async function editInforms() {
  const txtprof = document.getElementById('txtprof').value;
  const txtsobre = document.getElementById('txtsobre').value;
  const response3 = await fetch(`/Informes/${txtsobre}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtprof })
  });
  if (response3.ok) {
      fetchDados();
  }
}

async function excluirInforms() {
  const txtsobre = document.getElementById('txtsobre').value;
  const response3 = await fetch(`/Informes/${txtsobre}`, {
      method: 'DELETE'
  });
  if (response3.ok) {
      fetchDados();
  }
}

window.onload = fetchDados;
