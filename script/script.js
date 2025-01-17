//Impedisco il comportamento predefinito del tasto "Calcolo Preventivo"
document.querySelector(".calcolo-preventivo").addEventListener("click", function () {
    // Recupera i dati dal form
    const nome = document.querySelector("#input-nome").value;
    const cognome = document.querySelector("#input-cognome").value;
    const email = document.querySelector("#input-email").value;
    const tipoLavoro = document.querySelector("#tipo-lavoro").value;
    const note = document.querySelector("#note").value;
    const codicePromo = document.querySelector("#codice-promo").value;
    const accettaPolicy = document.querySelector("#flexCheckDefault").checked;
    const prezzoOut = document.querySelector(".fs-3 strong"); //Aggiorna il prezzo


    //Contrllo dei campi form compilati
    if(!nome || !cognome || !email || !tipoLavoro || !accettaPolicy ){
        alert("Compila tutti i campi ");
        return
    }


    //Impostare le ore di lavoro
    const oreLavoro = 10;


    // Controlla se è stato selezionato un tipo di lavoro valido
  if (!tipoLavoro || tipoLavoro === "Seleziona tipo di lavoro") {
    alert("Seleziona un tipo di lavoro valido.");
    return;
  };


  //Formula prezzo per ora
  const prezzoOrario = parseFloat(tipoLavoro.replace("," , ".")); // Converti il prezzo orario in numero
  let prezzoFinale = prezzoOrario * oreLavoro;


 


});