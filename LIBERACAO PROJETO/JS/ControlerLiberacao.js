class ControlerLiberacao {


    constructor() {
        this._cpInput = "";
        this._pvInput = "";

    }


    get cpInput() {

        return this._cpInput;

    }

    get pvInput(){
        
        return this._pvInput;

    }

    set cpInput(cpInput) {

        this._cpInput = cpInput;

    }

    set pvInput(pvInput){

       this._pvInput = pvInput; 

    }





   


    recebeHtml() {

        let form = document.querySelector(".formulario");
        let botaoEnviar = form.querySelector(".botaoLiberacao");

        botaoEnviar.addEventListener("click", function (event) {
            event.preventDefault();

            let corpoTabela = document.querySelector(".corpoTabela");


            let table = document.createElement("table");
            let tr = document.createElement("tr");
            let tdCp = document.createElement("td");
            let tdPv = document.createElement("td");
           
    
       
    
            


            this._cpInput = form.inputC.value;
            this._pvInput = form.inputPV.value;

            let regexCp = "([[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}|[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})";

            let expression = new RegExp(regexCp, "g");

            if (expression.test(this._cpInput)) {

                alert(`${this._cpInput} passou no teste !!!`);

                tdCp.textContent = this._cpInput;
                tdPv.textContent = this._pvInput;
        
        
                tr.appendChild(tdCp);
                tr.appendChild(tdPv);
                table.appendChild(tr);

                corpoTabela.appendChild(tr);


                //xlsx

//const downloadXLSX = () =>{
    const wb = XLSX.utils.book_new();
    
    wb.Props={
    Title:'LIBERACAO',
    Subject:'PLANILHA DE LIBERACAO',
    Author:'PAULO VITOR',
    CreatedDate: new Date(),
    };
    
    wb.SheetNames.push('LIBERACAO');
    const dados=[
    
    ['CNPJCPF', 'PV'],
    [`${this._cpInput}`,`${this._pvInput}`]
    
    ];
    
    const ws = XLSX.utils.aoa_to_sheet(dados);
    wb.Sheets['LIBERACAO']=ws;


    XLSX.writeFile(wb, 'LIBERACAO.xlsx',{bookType:'xlsx', type:'bynary'});

    //}
                 
                
            } else {

                alert(`${this._cpInput} esta incorreta !!!`);

            }

        })
    }


   




}




 let ob1 = new ControlerLiberacao();
 ob1.recebeHtml();


 