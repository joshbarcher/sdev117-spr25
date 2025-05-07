//declare the array
const foods = ['carne asada', 'pizza', 'pastelon', 'sushi', 'ramen', 'chicken', 'empanada', 'honey dew'];

//access elements using [] notation
const fav = foods[1];
console.log(fav);
console.log(foods[3])
console.log(`My favorite is ${foods[5]}`);

let lastFood = foods[foods.length - 1];
console.log(`Last food is ${lastFood}`);

lastFood = foods[foods.length];
console.log(`Last food is ${lastFood}`);

//alter elements in the array using [] notation
foods[0] = 'doners';
foods[1] = 'mac and cheese';
foods[foods.length] = 'rice';

foods[15] = 'beans';
foods['josh'] = 'carne asada'; //Java arrays are "associative" arrays (aka maps, dictionaries, ...)
foods['john'] = 'honey dew';

console.log(foods);

//print a missing value
console.log(`Some food is ${foods[50]}`);
console.log(`Josh's favorite is ${foods['josh']}`);
console.log(`John's favorite is ${foods['john']}`);

//print out the elements in the array
for (let i = 0; i < foods.length; i++) {
    const element = foods[i];

    if (element) {
        console.log(element);
    }
}

//easy way to loop over an array!
for (let food of foods) {
    if (food) {
        console.log(`One of our favorites is ${food}`);
    }
}

//this loops over the fields
for (let person in foods) {
    const food = foods[person];
    console.log(`${person} likes ${food}`);
}

//dynamic array generation
const randNums = [];

let found20 = false;
while (!found20) {
    //generate a random num in [1, 20]
    const num = Math.floor(Math.random() * 20) + 1;

    //add the number to the end of the array
    randNums.push(num);

    //stop if I generated a 20
    if (num === 20) {
        found20 = true;
    }
} 

console.log(randNums);

//remove all numbers and print them
while (randNums.length > 0) {
    const num = randNums.pop();
    console.log(`Removed ${num}`);
}

console.log("Array", randNums);