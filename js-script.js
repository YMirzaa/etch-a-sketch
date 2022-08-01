let gridSize = 32;

const container = document.querySelector('.container');

makeGrid(gridSize);

colorEvent();

const button = document.querySelector('#squareButton');

button.addEventListener('click', promptFunc);


function colorEvent(){
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid =>{
        grid.addEventListener('mouseover', changeColor)
    });

}

function makeGrid(size){
    for(let i=0; i!=size; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.toggle("rowContainer");
        container.appendChild(rowContainer);

        for(let j=0; j!=size; j++){

            const div = document.createElement('div');
            div.classList.toggle("grid");
            rowContainer.appendChild(div);
        }
    }
}

function removeGrid(size){
    for(let i=0; i!=size; i++){
        const rowContainer = document.querySelector('.rowContainer');
        container.removeChild(rowContainer);
    }
}

function changeColor(e){
    this.classList.toggle('changeColor');
}

function promptFunc(e){
    let promptString = prompt("Please enter the size of grid", '32');
    removeGrid(gridSize);
    gridSize = Number(promptString);
    
    if(gridSize>100){
        gridSize=100;
    }

    makeGrid(gridSize);
    
    colorEvent();
}

