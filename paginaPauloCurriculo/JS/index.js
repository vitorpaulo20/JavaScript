var formularioLogin = document.querySelector(".formularioLogin");
var botaoAcesso = formularioLogin.querySelector(".botaoLogin");

botaoAcesso.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector(".formularioLogin");


    var emailInserido = form.emailLogin.value;
    var senhaInserida = form.senhaLogin.value;

    console.log(emailInserido);
    console.log(senhaInserida);

    validaAcesso(senhaInserida);

})


function validaAcesso(senhaInserida) {


    var regexSenha = "^([A-Z])([0-9]{8})$";
    var expression = new RegExp(regexSenha, "g");

    if (expression.test(senhaInserida)) {

        setTimeout(function() {
            console.log(`sua senha ${senhaInserida} esta nos padrões`);
            return window.open("/NETFLIX/index.html");

        }, 500)


    } else {
        return alert(`sua senha ${senhaInserida} não esta nos padrões !!!`);
    }



}

