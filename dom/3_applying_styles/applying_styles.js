const heading = document.querySelector("h1");
console.log(heading);

//changing text 
heading.textContent = "Welcome to my JOKES page!!!!"; //or innerHTML

//changing styles
heading.style.color = "darkred";
heading.style.textDecoration = "underline";
heading.style.fontSize = "3.5rem"

//changing HTML attributes
heading.title = "My page header"; //a tooltip

//changing css classes
heading.className = "important";

//loop over all paragraphs
const paragraphs = document.querySelectorAll("p");

for (const para of paragraphs) { //this uses an iterator
    para.className = "box";
}

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].className = "box";
// }

const answers = document.querySelectorAll("span.answer");
for (const answ of answers) {
    answ.style.display = "block";
    answ.style.color = "green";
}

const questions = document.querySelectorAll("span.question");
for (const ques of questions) {
    ques.style.color = "blue";
}

const link = document.querySelector("a");
link.href = "https://www.hackerrank.com/";
//link.setAttribute("href", "https://www.hackerrank.com/");