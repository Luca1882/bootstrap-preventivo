//Impedisco il comportamento predefinito del tasto "Calcolo Preventivo"
document.querySelector(".calcolo-preventivo").addEventListener("click", function (event) {
  event.preventDefault();
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


  //Codici promozionali
  const codiciValidi = [
    "YHDNU32",
    "JANJC63",
    "PWKCN25",
    "SJDPO96",
    "POCIE24",
];


if(codiciValidi.includes(codicePromo)){
    prezzoFinale *= 0.75;
} else if (codicePromo){
    alert("Il codice inserito non è valido ! Non ti verrà applicato nessuno sconto");
};


//Risultato

prezzoOut.textContent = `€ ${prezzoFinale.toFixed(2)}`;


});