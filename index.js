let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let message=document.querySelector(".winner")

let playerX=false;
const pos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        count++;
        if(playerX)
            {
        box.innerText="X";
        playerX=false;
        }
        else{
            box.innerText="O";
            playerX=true;
        }
        box.disabled=true;
        checkWinners();

    });
});
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    message.innerText = `Winner is ${winner}`;
    message.classList.remove("hide");
    disableBtn(); 
};


const checkWinners = () => {
    let winnerFound = false;

    for (let win of pos) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                winnerFound = true;
                break;
            }
        }
    }

    if (!winnerFound && count >= 9) {
        message.innerText = `Match is Draw`;
        message.classList.remove("hide");
        disableBtn();
    }
};


const resetgame = () => {
    playerX = false; 
    count = 0;  
    enableBtn();
    message.classList.add("hide");
};

reset.addEventListener("click", resetgame);


 reset.addEventListener("click",resetgame);