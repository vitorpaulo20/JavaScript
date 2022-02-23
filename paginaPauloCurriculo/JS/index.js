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
    form.reset();

})


function validaAcesso(senhaInserida,form) {


    var regexSenha = "^([A-Z])([a-z]+[0-9]{2})$";
    var expression = new RegExp(regexSenha, "g");

    if (expression.test(senhaInserida)) {

        setTimeout(function() {
            console.log(`sua senha ${senhaInserida} esta nos padrões`);
            window.open("/NETFLIX/index.html");
    

        }, 1500)


    } else {
         alert(`sua senha ${senhaInserida} não esta nos padrões !!!`);
        var spanSenha = document.querySelector(".senhaErrada");
        spanSenha.textContent = `Sua senha deve iniciar com uma letra Maiuscula seguido de letras minusculas e terminar com dois numeros.`
    }



}

