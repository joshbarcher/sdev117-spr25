//wait until the page loads
window.onload = () => {
    //register clicking the button
    const button = document.querySelector("#cat-btn");
    button.onclick = clickHandler;
}

function clickHandler() {
    //where is the data?
    const url = "https://api.thecatapi.com/v1/images/search";
    const config = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    }

    //get's the data back using a JS 'promise'
    fetch(url, config)
        .then(function(response) {
            console.log(response);

            //converts JSON text to JS object
            return response.json();
        })
        .then(function(json) {
            console.log(json);

            const cat = json[0];
            drawCat(cat)
        })
}

function drawCat(cat) {
    const img = document.querySelector("#cat-img");
    img.src = cat.url;
}