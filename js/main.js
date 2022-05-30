//Variabile globale, per richiamare il mio elemento HTML utilizabile in tutto il mio foglio js
const gridContainer = document.querySelector(".grid-container");

// imposto la variabile per la condizione di gameover;
let gameover = 0;

// funzione per la creazione delle bombe nel mio gioco 
function bombList (maxBombsNumber){
    //qui dentro ora creo un array vuoto in cui andranno i miei numeri che ho generato per le bombe
    const contenitoreBombe = [];
    //creo il mio ciclo per generare 16 numeri random da andare ad inserire nel mio array
    for(let i = 1 ; i <= 16 ; i++){
        // qui inserirò la mia operazione matematica per generare numeri random casuali
        let randomNumbers = Math.floor(Math.random() * maxBombsNumber) + 1;
        //creo la mia condizione per far si che dentro al mio array ci siano tutti numeri diversi.
        if(!contenitoreBombe.includes(randomNumbers)){
            contenitoreBombe.push(randomNumbers);
        }
    }
    // richiamo la mia funzione per farla funzionare
    return contenitoreBombe;
} 
// funzione per il numero di celle che deve essere presente nel mio gioco
function cellGrid (orizontalCells , verticalCells){

    // variabile del numero delle mie celle
    const cellsNumber = orizontalCells * verticalCells;

    // variabile delle mie bombe
    const contenitoreBombe = bombList(cellsNumber)

    console.log(contenitoreBombe);
    console.log(cellsNumber);
    
    //questa formula va messa fuori il nostro ciclo for perchè sennò ad ogni ciclo si ripete
    //questo fa riferimenti al ciclo for sottostante!!
    gridContainer.style.width = `calc(100px * ${orizontalCells})`
    // creo il mio ciclo per far si che si vedano le mie celle
    for (let i = 1 ; i<=cellsNumber; i++){
        // creo una variabile per i miei numeri crescenti
        const celle = document.createElement("div");
        celle.classList.add("celle");
        celle.innerHTML = `<span>${i}</span>`;
        //append per aggiungere un elemento virtuale ad un elemento che abbiamo creato
        gridContainer.append(celle);

function eventoClick(cellGrid,bombList){
// creo l'elemento per far cambiare colore alle celle al click
        celle.addEventListener("click", function () {
            // questa qui è la mia costante per vedere il numero dell'indice delle mie caselle
            const celleIndex = +this.dataset.indice

            //creo delle condizioni per fermare il gioco quando si avverano
            if(this.classList.contains('bg-red') || this.classList.contains('bgAzzurro') || gameover){
                return
            }
            celle.classList.add("bgAzzurro");
            celle.classList.remove("bg-red");
            console.log("Hai selezionato ", +this.dataset.indice)
            
            if(contenitoreBombe.includes(cellsNumber)){
                celle.classList.add("bg-red")
                gameover = +true;
                alert("Hai perso!")
            }
            
        })
    }
    eventoClick(cellGrid(), bombList())
}
}
        
//Creo il mio evento on-click alla fine, dopo aver creato le mie funzioni, ovviamente voglio che certi eventi accadano all'interno del mio click!

//creo la mia costante play(fa riferimento al mio html) per far cambiare numero delle mie celle in base al livello di difficoltà.
//la richiamo fuori dal mio add eventListner perchè deve esistere a prescindere del click dell'utente.
    const play = document.getElementById('play')

    play.addEventListener("click", function(){

        gridContainer.classList.remove("Easy", "Medium", "Hard")
        gridContainer.innerHTML="";

    if (document.getElementById('Easy').selected) {
        cellGrid(10, 10)
    } else if (document.getElementById('Medium').selected) {
        cellGrid(9, 9)
    } else if (document.getElementById('Hard').selected) {
        cellGrid(7, 7)
    }
    })
