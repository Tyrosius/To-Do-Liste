// Das wird dann später zum Local Storage;

const h3 = document.querySelector("h3");
// Selektion
const forms = document.querySelectorAll("form");

forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);

function addList() { alert('not implemented') };
function editList() { alert('not implemented') };

let lastId = document.querySelectorAll('#toDoList li').length+1;

function addToDo() {
    const toDoName = document.querySelector('#toDoInput');
    
    console.log(toDoName.value);
    const toDoList = document.getElementById('toDoList');
    toDoList.innerHTML +=`  <li id="ToDo${lastId}">
                            <h3>${toDoName.value}</h3>
                                <button onclick="inProgress(event)">in progress</button>
                                <button onclick="done(event)">done</button>
                                <button class="edit-button" onclick="editToDo(event)">edit</button>
                                <button onclick="deleteToDo(event)" class="deleteButton">delete</button>
                            </li>`;
    lastId++;
    toDoInput.value = "";
};
function ProgressFunk(event) {
    event.currentTarget.parentNode.querySelector("h3").style.color = 'orange';     
};
// Step 2: Add EventListener without html click.

function inProgress(event) {
    event.currentTarget.parentNode.querySelector('h3').style.color = 'orange';
}

function done(event) {
    event.currentTarget.parentNode.querySelector('h3').style.color = 'blue';
}

function editToDo(event) {
  const currentId = event.currentTarget.parentNode.id;
  const editButton = document.querySelector(`#${currentId}>.edit-button`);
  const newName = prompt("Neue Bezeichnung eingeben: ", editButton.parentNode.childNodes[1].innerHTML);
  if (newName !== "" && newName !== null) {
    editButton.parentNode.childNodes[1].innerHTML = newName;
  }
};

const deleteToDo = (eventObject) => {
    eventObject.currentTarget.parentNode.remove();
}


//function deleteToDo() { alert('not implemented') };


// const toDo= document.getElementById('toDoList');

// toDo.addEventListener('click',() => {
//     toDo.remove();
// });

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

//Aufgabe 4. Anna

// löschen Pseudocode (e) => e.target.parentelement.remove



