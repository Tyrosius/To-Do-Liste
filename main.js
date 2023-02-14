const forms = document.querySelectorAll("form");

forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);

function addList() { alert('not implemented') };
function editList() { alert('not implemented') };
function deleteList() { alert('not implemented') };

function addToDo() { alert('not implemented') };
function inProgress() { alert('not implemented') };
function done() { alert('not implemented') };
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

// Done -> image ändern und style von der H3 ändern
// Progress -> image ändern style von H3?

//Aufgabe 4.

// löschen Pseudocode (e) => e.target.parentelement.remove



