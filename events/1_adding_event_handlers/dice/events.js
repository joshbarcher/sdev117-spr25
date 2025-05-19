//global variables
let timer = undefined;

window.onload = () => {
    document.querySelector("#create-one").onclick = () => {
        createNewDice();
    }
    
    document.querySelector("#create-many").onclick = () => {
        if (timer === undefined) {
            timer = window.setInterval(createNewDice, 1000);
        }
    }

    document.querySelector("#stop").onclick = () => {
        window.clearInterval(timer);
        timer = undefined;
    }
}

function createNewDice() {
    const playArea = document.querySelector("#play-area");
    const side = randomSide();

    const img = document.createElement("img"); //<-- this is a DOM object now!
    img.src = `images/${side}.png`;
    img.alt = "A die";
    img.className = "dice"
    img.ondblclick = deleteDice;

    playArea.appendChild(img);
}

function deleteDice(event) {
    const img = event.target;
    img.remove(); //remove the img element
}

function clickDice(event) {
    const img = event.target;
    img.src = `images/${randomSide()}.png`;
}

function randomSide() {
    return Math.floor(Math.random() * 6) + 1;
}