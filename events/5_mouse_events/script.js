const CANVAS_W = 500;
const CANVAS_H = 500;
const IMG_SIZE = 100;

window.onload = function() {
    const target = document.querySelector("#target");

    target.onmousedown = (event) => {
        console.log(event);

        //move the target randomly
        const randomX = Math.random() * (CANVAS_W - IMG_SIZE);
        const randomY = Math.random() * (CANVAS_H - IMG_SIZE);

        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
    }

    //try to turn off mouse movement on the target
    target.onmousemove = (event) => {
        //stop event bubbling to the parent element (pink box)
        event.stopPropagation();
    }

    //select the container box (in pink)
    const box = document.querySelector("#container");

    box.onmouseup = (event) => {
        const newX = event.clientX;
        const newY = event.clientY;

        //move the target to this location
        target.style.left = `${newX}px`;
        target.style.top = `${newY}px`;
    }

    box.onmousemove = (event) => {
        //get the position of mouse
        const x = event.clientX;
        const y = event.clientY;

        const xBox = document.querySelector("#x");
        const yBox = document.querySelector("#y");

        xBox.value = x;
        yBox.value = y;
    }
};