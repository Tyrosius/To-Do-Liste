const h3 = document.querySelector("h3");

// Selektion
const forms = document.querySelectorAll("form");

const inProgress = document.getElementsByClassName("progress");
const done = document.getElementsByClassName("done");


forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);



function addList() { alert('not implemented') };
function editList() { alert('not implemented') };
function deleteList() { alert('not implemented') };

function addToDo() { alert('not implemented') };
function editToDo() { alert('not implemented') };
function deleteToDo() { alert('not implemented') };


//Aufgabe 1

// id ab 4 incrementieren alle einmalig.
// Auf Input value zugreifen. 
// Pseudocode: 
// AddButton.EventListener (Function () => ul.append(Input Value))

//Aufgabe 2

// edit: über Parent Element auf h3 zugreifen und editieren.
// image ändern.

//Aufgabe 3

// Step 1: Write the functions hardcoded.
// function nowdoneFunk(event) {
//     event.currentTarget.parentNode.querySelector("h3").style.color = 'red';
// }


function ProgressFunk(event) {
    event.currentTarget.parentNode.querySelector("h3").style.color = 'orange';     
};
// Step 2: Add EventListener without html click.

[...done].forEach((button) =>{
    button.addEventListener('click',(e) => e.currentTarget.parentNode.querySelector("h3").style.color = 'red')
});

[...inProgress].forEach((button) =>{
    button.addEventListener('click',(e) => e.currentTarget.parentNode.querySelector("h3").style.color = 'orange')
});

// Done -> image ändern und style von der H3 ändern
// Progress -> image ändern style von H3?

//Aufgabe 4.

// löschen Pseudocode (e) => e.target.parentelement.remove



