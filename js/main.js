





//Creo un adEventListener prima dell'inizio del gioco per permettere al giocatore di premere su start the game
const start = document.getElementById("start")
start.addEventListener("click", function()  {

//Variabile globale, per richiamare il mio elemento HTML utilizabile in tutto il mio foglio js
const gridContainer = document.querySelector(".grid-container");
  
    // quanto voglio che sia grande la griglia? inteso in numero di quadrati che può contenere
function cellGrid (orizontalCells , verticalCells){
    const cellsNumber = orizontalCells * verticalCells;

    console.log(cellsNumber)
    
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
        
        // celle.addEventListener("click" , function(){
        //     this.classList.add('bg');
        // })

    }


}
cellGrid(10, 10);
})