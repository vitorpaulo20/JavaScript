const PowerShell = require("powershell");
 
class Executa{





 executaNode(){
// Start the process
let ps = new PowerShell("node ./envio.js");


// Handle process errors (e.g. powershell not found)
ps.on("error", err => {
    console.error(err);
});
 
// Stdout
ps.on("output", data => {
    console.log(data);
});
 
// Stderr
ps.on("error-output", data => {
    console.error(data);
});
 
// End
ps.on("end", code => {
    // Do Something on end
});



console.log('a função foi executada');
}



}

