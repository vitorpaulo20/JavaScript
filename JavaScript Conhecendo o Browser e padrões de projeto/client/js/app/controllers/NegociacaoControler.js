class NegociacaoControler {

constructor(){

    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
   
}









    adiciona(event) {


        event.preventDefault();

       // alert('Chamei o metodo da Negociação Controler');
       
       let dataTradada = this._inputData.value.split("-");
      

        let data = new Date(dataTradada);

        console.log(data);
    
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor
        // )

       

    }

}