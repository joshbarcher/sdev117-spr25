
/*
    <div class="contact-info">
        <h2>Sammy Sue</h2>
        <p>Cell: 111-222-3333</p>
        <aside>Note - Good friend!</aside>
    </div>
*/
function addElements1() {
    const content = `<div class="contact-info">
        <h2>Sammy Sue</h2>
        <p>Cell: 111-222-3333</p>
        <aside>Note - Good friend!</aside>
    </div>`;

    const section = document.querySelector("#content");
    section.innerHTML += content;
}

function addElements2() {
    //create the dom elements
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const aside = document.createElement("aside");

    //configure them
    div.className = "contact-info";
    h2.textContent = "Johnny Smith";
    p.textContent = "Cell: 222-333-4444";
    aside.textContent = "Note - Family Member"

    //attach dom elements
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(aside);

    const section = document.querySelector("#content");
    section.appendChild(div);
}

const button = document.querySelector("button");
button.onclick = addElements1; //call addElements by reference (by name)