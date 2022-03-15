let botaoMaisInfo = $(".maisInfo");
let botaoAssistirAgora = $(".assistirAgora");

botaoMaisInfo.on("click",function(event){
    event.preventDefault();
    alert("Fui clicado info!!!");
})


botaoAssistirAgora.on("click",function(event){
    event.preventDefault();
    alert("Fui clicado assistir!!!");
})



