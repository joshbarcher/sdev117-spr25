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
    let stars = starsBox.value;

    //count the number of errors I find
    let errorCount = 0;

    //validate name
    if (fullName.length < 2 || fullName.length > 20) {
        //show the error text
        document.querySelector("#name-error").style.display = "block";
        errorCount++;
    } else {
        //hide the error text
        document.querySelector("#name-error").style.display = "none";
    }

    //validate stars
    stars = parseInt(stars);
    if (stars < 1 || stars > 5) {
        //show the error text
        document.querySelector("#stars-error").style.display = "block";
        errorCount++;
    } else {
        //hide the error text
        document.querySelector("#stars-error").style.display = "none";
    }

    //submit the form if everything is all right
    if (errorCount === 0) {
        document.forms["survey-form"].submit();
    }
}