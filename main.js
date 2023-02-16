import './module/edit.js'

// Das wird dann später zum Local Storage;

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

function addToDo() { alert('not implemented') };
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

function editToDo(element) {
  const currentId = element.currentTarget.parentNode.id;
  const editButton = document.querySelector(`#${currentId}>.edit-button`);
  const newName = prompt("Neue Bezeichnung eingeben: ", editButton.parentNode.childNodes[1].innerHTML);
  if (newName !== "" && newName !== null) {
    editButton.parentNode.childNodes[1].innerHTML = newName;
  }
};

//function deleteToDo() { alert('not implemented') };


// const toDo= document.getElementById('toDoList');

// toDo.addEventListener('click',() => {
//     toDo.remove();
// });

const listItem= document.getElementById('ToDo1');

const deleteToDo = (eventObject) => {
    eventObject.currentTarget.parentNode.remove();
}
// const deleteButton = document.getElementsByClassName('deleteButton');

// [...deleteButton].addEventListener('click',() => {
//     listItem.remove();
// })


//function deleteList() { alert('not implemented') };


//Aufgabe 1 Nico

// id ab 4 incrementieren alle einmalig.
// Auf Input value zugreifen.
// Pseudocode:
// AddButton.EventListener (Function () => ul.append(Input Value))

//Aufgabe 2 Florian

// edit: über Parent Element auf h3 zugreifen und editieren.
// image ändern.

//Aufgabe 3 Gerald

//document.querySelector('#ToDoList>*')



// Step 1: Write the functions hardcoded.
// function nowdoneFunk(event) {
//     event.currentTarget.parentNode.querySelector("h3").style.color = 'red';
// }

// Done -> image ändern und style von der H3 ändern
// Progress -> image ändern style von H3?

//Aufgabe 4. Anna

// löschen Pseudocode (e) => e.target.parentelement.remove



