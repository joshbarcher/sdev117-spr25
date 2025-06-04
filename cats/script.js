//wait until the page loads
window.onload = () => {
    //register clicking the button
    const button = document.querySelector("#cat-btn");
    button.onclick = loadImage;

    //onload we show an initial image
    loadImage();
    loadBreeds();
}

//async turns this function into a "promise" as well!
async function loadBreeds() {
    const url = "https://api.thecatapi.com/v1/breeds";
    const config = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    }

    //wait until the promise of fetch() is complete
    const response = await fetch(url, config);
    const data = await response.json();

    displayBreeds(data);
}

function displayBreeds(data) {
    const breedsSection = document.querySelector("#breeds");

    for (const breed of data) {
        const html = `<div class="breed">
            <h2>${breed.name}</h2>
            <p>${breed.description}</p>
        </div>`

        breedsSection.innerHTML += html;
    }
}

function loadImage() {
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
            //converts JSON text to JS object
            return response.json();
        })
        .then(function(json) {
            const cat = json[0];
            drawCat(cat)
        })
}

function drawCat(cat) {
    const img = document.querySelector("#cat-img");
    img.src = cat.url;
}