const laptop = {
    name: "ASUS Zephyr",
    new: true,
    cpu: {
        manufacturer: "AMD",
        family: "Ryzen 9"
    },
    storage: ["1tb ssd", "2tb ssd", "1tb backup"]
}

console.log(laptop);
console.log(laptop.cpu.family); //ryzen 9!

//convert to JSON formatted text (just text...)
const json = JSON.stringify(laptop);
console.log(json);
//console.log(json.toUpperCase());

//convert back to a JS object
const objectAgain = JSON.parse(json);
console.log(objectAgain);