
let dataBase = [
    {   aufgabe: 'waschen',
        id: '1'
    },
    {   aufgabe: 'Busch Verprügeln',
        id: '2'
    }
]

const toDoList = document.getElementById('toDoList');

let id = 4;

dataBase.forEach((toDo) => {
    
    // Kommentare

    // let listElement = document.creatElement('li');
    // toDoList.appendChild(listElement);

    // let createButton = document.createElement('button');
    // listElement.appendChild(createButton);

    
    // let createButton2 = document.createElement('button');
    // listElement.appendChild(createButton2);

    
    // let createButton3 = document.createElement('button');
    // listElement.appendChild(createButton3);


    // das gleiche wie oben
    // toDoList.innerHTML += `<li><button></button>
    // <button></button><button></button></li> `;

//

let newHTML = `
<li id="ToDo${id}">
<h3>${toDo.aufgabe}</h3>
    <button class="progress" onclick="inProgress(event)">in progress</button>
    <button class="done">done</button>
     <button class="edit-button" onclick="editToDo(event)">edit</button>
    <button onclick="deleteToDo(event)">delete</button>
</li>`;

//toDoList.innerHTML = toDoList.innerHTML + newHTML; Das selbe wie.
toDoList.innerHTML += newHTML;

id++;
} )
