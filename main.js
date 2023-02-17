// Dom Elemente
const toDoList = document.getElementById('toDoList');

// fetch local Storage;

Object.keys(localStorage).sort().forEach((key) => {

  toDoList.innerHTML += `  <li id="ToDo${key}">
    <h3>${localStorage[key]}</h3>
        <button onclick="inProgress(event)">in progress</button>
        <button onclick="done(event)">done</button>
        <button class="edit-button" onclick="editToDo(event)">edit</button>
        <button onclick="deleteToDo(event)" class="deleteButton">delete</button>
    </li>`;
})

const h3 = document.querySelector("h3");
// Selektion
const forms = document.querySelectorAll("form");

forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);

function addList() { alert('not implemented') };
function editList() { alert('not implemented') };


let lastId = document.querySelectorAll('#toDoList li').length;
console.log(lastId);

function addToDo() {
  const toDoName = document.querySelector('#toDoInput');

  if (toDoName.value.trim() !== "") {
    toDoList.innerHTML += `  <li id="ToDo${lastId}">
                            <h3>${toDoName.value}</h3>
                                <button onclick="inProgress(event)">in progress</button>
                                <button onclick="done(event)">done</button>
                                <button class="edit-button" onclick="editToDo(event)">edit</button>
                                <button onclick="deleteToDo(event)" class="deleteButton">delete</button>
                                </li>`;
                                // ToDO wird in localStorage gespeichert.
    localStorage.setItem(lastId.toString(), toDoName.value);
    toDoInput.value = "";
    lastId++;
  }
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

  const regEx = /[a-zA-Z]+/;
  const idNumber = currentId.replace(regEx,"");  
  
  
  const editButton = document.querySelector(`#${currentId}>.edit-button`);
  const newName = prompt("Neue Bezeichnung eingeben: ", editButton.parentNode.childNodes[1].innerHTML);
  if (newName.trim() !== "" && newName !== null) {
    editButton.parentNode.childNodes[1].innerHTML = newName;
  }

  localStorage.setItem(idNumber,newName);
  };

const deleteToDo = (eventObject) => {
  
  let item =  eventObject.currentTarget.parentNode.id.slice(4);
  console.log(item);

  localStorage.removeItem(item);
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

 const deleteList =  (eventObject) => { 
  localStorage.clear();
  //document.querySelector()
};

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



