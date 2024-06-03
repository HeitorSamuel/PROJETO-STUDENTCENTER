function irprahome() {
  window.location.href = "../pagdehome/homepage.html";
}
// var tb, index;

// function cadTable(data, assunto, nota) {

//   tb = document.getElementById("idtable");
//   var qtdLinhas = tb.rows.length;
//   var linha = tb.insertRow(qtdLinhas);

//   var cellDATA = linha.insertCell(0);
//   var cellASSUNTO = linha.insertCell(1);
//   var cellNOTA = linha.insertCell(2);

//   cellDATA.innerHTML = data;
//   cellASSUNTO.innerHTML = assunto;
//   cellNOTA.innerHTML = nota;

//   preeencheCamposForm();

// }

// function altTabelaATV(data, assunto, nota) {

//   tb.rows[index].cells[0].innerHTML = data;
//   tb.rows[index].cells[1].innerHTML = assunto;
//   tb.rows[index].cells[2].innerHTML = nota;
// }

// function preeencheCamposForm() {
//   for (var i = 0; i < tb.rows.length; i++) {
//     tb.rows[i].onclick = function() {
//       index = this.rowIndex;
//       document.getElementById("txtdata").value = tb.rows[index].cells[0].innerText;
//       document.getElementById("txtassunto").value = tb.rows[index].cells[1].innerText;
//       document.getElementById("txtnota").value = tb.rows[index].cells[2].innerText;
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

async function fetchDados() {
  const response = await fetch('/datasentregas');
  const dados = await response.json();
  const tabela = document.getElementById('tabelaDados');
  tabela.innerHTML = '';
  dados.forEach(dado => {
      const row = tabela.insertRow();
      row.insertCell(0).innerText = dado.txtdata;
      row.insertCell(1).innerText = dado.txtassunto;
      row.insertCell(2).innerText = dado.txtnota;
      row.onclick = () => preencherFormulario(dado);
  });
}

function preencherFormulario(dado) {
  document.getElementById('txtdata').value = dado.txtdata;
  document.getElementById('txtassunto').value = dado.txtassunto;
  document.getElementById('txtnota').value = dado.txtnota;
}

async function adicionarNaTabela() {
  const txtdata = document.getElementById('txtdata').value;
  const txtassunto = document.getElementById('txtassunto').value;
  const txtnota = document.getElementById('txtnota').value;
  const response = await fetch('/datasentregas', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtdata, txtassunto, txtnota })
  });
  if (response.ok) {
      fetchDados();
  }
}

async function editarNaTabela() {
  const txtdata = document.getElementById('txtdata').value;
  const txtassunto = document.getElementById('txtassunto').value;
  const txtnota = document.getElementById('txtnota').value;
  const response = await fetch(`/datasentregas/${txtassunto}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ txtdata, txtnota })
  });
  if (response.ok) {
      fetchDados();
  }
}

async function excluirDaTabela() {
  const txtassunto = document.getElementById('txtassunto').value;
  const response = await fetch(`/datasentregas/${txtassunto}`, {
      method: 'DELETE'
  });
  if (response.ok) {
      fetchDados();
  }
}

window.onload = fetchDados;