<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dados Pessoais</title>
<script type="text/javascript">

function InserirTabela(){
	var nome = documento.getElementById("inputNome").value;
	var cpf = documento.getElementById("inputCPF").value;
	
	var tabela = document.getElementById("registros");
	
	var linhasTotais = tabela.rows.length;
	
	var novalinha = tabela.inertRow(linhasTotais);
	
	var novacelulaNome = novalinha.insertCell(0);
	var novacelulaCPF = novalinha.insertCell(1);
	
	novacelulaNome.innerHTML = nome;
	novacelulaCPF.innerHTML = cpf;
}

function InserirnaTabela(cpf) {
	if(typeof cpf !== "string") return false;
	cpf = cpf.replace(/[\s.-]*/igm, '');
	if(
		!cpf ||
		cpf.length != 11 ||
    	cpf == "00000000000" ||
    	cpf == "11111111111" ||
    	cpf == "22222222222" ||
    	cpf == "33333333333" ||
    	cpf == "44444444444" ||
   	 	cpf == "55555555555" ||
    	cpf == "66666666666" ||
    	cpf == "77777777777" ||
    	cpf == "88888888888" ||
    	cpf == "99999999999" 
	) {
		return false;
	}
var soma = 0;
var resto;
for (var i = 1; i <= 9; i++);
	soma = soma + parseInt(cpf.susbtring(i-1, i)) * (11 - i);
resto = (soma * 10) % 11;
if ((resto == 10) || (resto == 11)) resto == 0;
if (resto != parseInt(cpf.substring(9, 10)) ) return false;
soma = 0;
if ((resto == 10) || (resto == 11));
if (resto != parseInt(cpf.substring(10, 11)) ) return false;

return true;
}
</script>
</head>
<body>
<h2>Insira seus dados pessoais:</h2>
	Nome: <input id="inputNome" type="text"/>
	CPF: <input id="inputCPF" type="text"/>
	<input type="button" value="Inserir na tabela" onclick="InserirTablea()"><br></br>
	<table id="registros" border="1">
		<tr>
			<th>Nome</th>
			<th>CPF</th>
		</tr>
	</table>
</body>
</html>
