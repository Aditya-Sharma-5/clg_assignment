// fetch all the data
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

// all the winning possible cases
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialise the game
function initGame() {

    // starting player
    currentPlayer = "X";

    // starting m sb empty h 
    gameGrid = ["","","","","","","","",""];

    //UI pr empty bhi karna padega boxes ko
    boxes.forEach((box, index) => {
        box.innerText = "";

        // firse pointer ko cursor m change kr diya
        boxes[index].style.pointerEvents = "all";

        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
    });

    // starting mai [New Game] ka btn nhi hoga 
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// calling the init game
initGame();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    //UI Update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";

    winningPositions.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value == ya to X hoga ya 0 hoga
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                //check if winner is X
                if(gameGrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    
                // jb winner mil jae to pointer event ko disable krdo 
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index) {

    // check the box is empty or not 
    if(gameGrid[index] === "" ) {
        // ye UI m change krega 
        boxes[index].innerText = currentPlayer;

        // ye hmare array m change krega , winner check krne k liye 
        gameGrid[index] = currentPlayer;

        // jisse dobara cursor na aae , clicked box pr 
        boxes[index].style.pointerEvents = "none";

        //swap karo turn ko
        swapTurn();
        
        //check koi jeet toh nahi gya
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);