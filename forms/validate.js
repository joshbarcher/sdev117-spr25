window.onload = () => {
    const formButton = document.querySelector("button");
    formButton.onclick = validate;
}

function validate(event) {
    //stop the form from submitting
    event.preventDefault();

    //manually select and validate the elements in the form
    const fullNameBox = document.querySelector("#full-name");
    const starsBox = document.querySelector("#stars");

    //access the text in the box using the value property
    const fullName = fullNameBox.value;
    const stars = starsBox.value;

    console.log(fullName, stars);
}