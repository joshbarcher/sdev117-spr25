
const student = {
    sid: 1081080182,
    name: {
        fName: "Todd",
        lName: "Smith",
        middle: "B",
        nickname: "T-Boy"
    },
    hobbies: [
        { name: "poetry", favorite: false },
        { name: "gardening", favorite: false },
        { name: "basketball", favorite: true }
    ],
    age: 28,
    program: "Software Dev",
    classes: [ "SDEV 117", "CS 108", "ENGL 101" ],
    resident: true,

    hi: function() {
        console.log(`Hello, my name is ${this.name.fName}`);
    },
    printHobbies: function() {
        for (let hobby of this.hobbies) {
            console.log(`Hobby: ${hobby.name}`);
        }
    }
}

// function sayHi() {
//     console.log("Hello!");
// }

//call a few methods
student.hi();
student.printHobbies();

//print out student details
console.log(student.sid);
console.log(student.name);
console.log(`Name: ${student.name.fName}`);
console.log(student.age);
console.log(student.hobbies[2].name);

//print out the number of classes the student is enrolled in
console.log(`${student.name.fName} is enrolled in ${student.classes.length} classes`);

//challenge - can you print out each class the student is enrolled in (on different lines)
for (let cls of student.classes){
    console.log(`Enrolled in ${cls}`);
}