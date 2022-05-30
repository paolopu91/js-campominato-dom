





//Creo un adEventListener prima dell'inizio del gioco per permettere al giocatore di premere su start the game
const start = document.getElementById("start")
start.addEventListener("click", function()  {


//Variabile globale, per richiamare il mio elemento HTML utilizabile in tutto il mio foglio js
const gridContainer = document.querySelector(".grid-container");

//creo la mia funzione per generare le bombe dentro al mio gioco
function bombNumberList (cellGrid, ){
    //qui dentro ora creo un array vuoto in cui andranno i miei numeri che ho generato per le bombe
    const containerBomb = [];
    console.log(containerBomb);
    //creo il mio ciclo per generare 16 numeri random da andare ad inserire nel mio array
    do{
        // qui inserirò la mia operazione matematica per generare numeri random casuali
        const randomNumber = Math.round(Math.random() * cellGrid) + 1;
        console.log(randomNumber);
        //creo la mia condizione per far si che dentro al mio array ci siano tutti numeri diversi.
        if(!containerBomb.includes(randomNumber)){
            containerBomb.push(randomNumber);
        }
    }while(containerBomb);

    return containerBomb;
}


    // quanto voglio che sia grande la griglia? inteso in numero di quadrati che può contenere
function cellGrid (orizontalCells , verticalCells){
    
    const cellsNumber = orizontalCells * verticalCells;

    console.log(cellsNumber);
    
    //questa formula va messa fuori il nostro ciclo for perchè sennò ad ogni ciclo si ripete
    gridContainer.style.width = `calc(100px * ${orizontalCells})`
    

    // creo il mio ciclo per far si che si vedano le mie celle
    for (let i = 1 ; i<=cellsNumber; i++){
        // creo una variabile per i miei numeri crescenti

        const celle = document.createElement("div");
        celle.classList.add("celle");
        celle.innerHTML = `<span>${i}</span>`;
        //append per aggiungere un elemento virtuale ad un elemento che abbiamo creato
        gridContainer.append(celle);

        // creo l'elemento per far cambiare colore alle celle al click
        celle.addEventListener("click", function () {
            this.classList.add('bgAzzurro');
        })
        
        celle.toggleAttribute("click" , function(){
        this.classList.add('bg');
        })

    }

}
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

cellGrid(10, 10);
cellGrid(8, 8);
cellGrid(7, 7);
})