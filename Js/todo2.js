//select dom 
let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");
let tipsBtn = document.querySelector(".tipBtn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.getElementById("overlay")

//add new todo
input.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    //creating lists 
    let li = document.createElement("li");
    let spanElement = document.createElement("span");
    let icon = document.createElement("i");

    let newTodo = this.value;
    this.value = " ";

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, newTodo);

    deleteTodo();

  }

});

//load todo
function loadTodo() {
  if (localStorage.getItem('todoList')) {
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//highline list
ul.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}
);

//delete todo 
function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function () {
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//hide input box
pencil.addEventListener('click', function () {
  input.classList.toggle('display');
});



//save todolist
saveBtn.addEventListener('click', function () {
  localStorage.setItem('todoList', ul.innerHTML);

});

//clear all todo
clearBtn.addEventListener('click', function () {
  ul.innerHTML = "";
  localStorage.removeItem('todoList', ul.innerHTML);
});

// //display overlay 
// tipsBtn.addEventListener("click", function () {
//   overlay.style.height = "100%";
// });

// //close overlay 
// closeBtn.addEventListener("click", function (e) {
//   e.preventDefault;
//   overlay.style.height = "0";

// })

//delete todo
deleteTodo();

//load Todo
loadTodo();
