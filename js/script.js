//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0, 
        left: 0,
        behavior: "smooth"
        })
}

//Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario') [0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html"
        logado = 1;
    }   
    
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
// function cadastro() {
//    alert("Cadastrado com sucesso!");
//    window.location.href = "index.html";
// }

//Ativar alert no botão cadastrar

function cadastro() {

    // Primeiro procuramos os campos pelo name.

    // Como tem outro usuario e senha acima e contamos a partir do zero, colocamos [1] do lado

    var usuario = document.getElementsByName('usuario')[1].value
    var email = document.getElementsByName('email')[0].value
    var senha = document.getElementsByName('senha')[1].value

    // Depois, verificamos se os dados estão diferentes de texto vazio(''), se todos estiverem foram preenchidos

    if(usuario != '' && email != '' && senha != '') {
        alert("Cadastrado com sucesso!");
        window.location.href = "index.html";
    }
    // Caso um não esteja, mostramos um alerta
    else {
        alert("Preencha todos os campos")  
    }
}