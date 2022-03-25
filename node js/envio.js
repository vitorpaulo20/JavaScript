let htmlArquivo ='<a href="download/liberacao.xlsx" download="liberacao.xlsx">Download Text</a>';
// comando para receber a lib do node

const nodemailer = require('nodemailer');



// comandos para configurar o servidor smtp 
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "curriculosdafonte@gmail.com",
        pass: "uutjitrepcexsoeo"
    },
    tls: { rejectUnauthorized: true }
  });



//comandos para configurar a mensagem a ser enviada 

const mailOptions = {
    from: 'paulo.almeida@dafontepneus.com.br',
    to: 'pedro.ernesto@dafontepneus.com.br',
    subject: 'Numero da loja',
    html: `<p>aqui vai ser enviada a pv</p>`,
    attachments: [{
        filename: 'LIBERACAO.xlsx',
        path: './ARQUIVO/LIBERACAO.xlsx'
      }]
  };




  let message = {
    from: 'usuario@teste.com',
    to: 'teste@teste.com',
    subject: 'Veja os anexos',
    html: 'Estou mandando alguns anexos para testar.'
    
  };

// validador de envio 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });


 