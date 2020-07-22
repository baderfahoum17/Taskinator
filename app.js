// testing function
function test(name, testFunction) {
  function equal(x, y, message = `Expected ${x} to equal ${y}`) {
    if (x === y) {
      console.info("Pass: " + message);
    } else {
      console.error("Fail: " + message);
    }
  }

  function notEqual(x, y, message = `Expected ${x} not to equal ${y}`) {
    if (x !== y) {
      console.info("Pass: " + message);
    } else {
      console.error("Fail: " + message);
    }
  }

  const assertions = {
    equal,
    notEqual,
  };

  console.group(name);
  testFunction(assertions);
  console.groupEnd(name);
}
function whiteSpaces(text) {
  return text.trim();
}

function taskCompleter(htmlel) {
  console.log(htmlel);
  return `${htmlel.classList.toggle("striked")}`;
}
/// todoList logic

const addForm = document.querySelector(".add");
const ullist = document.querySelector(".todos");
// const delete = document.querySelector(".delete");

console.log(ullist);
// li template generator
const generateTemplate = (todo) => {
  let taskli = document.createElement("li");
  taskli.classList.add("text-center");

  let spanli = document.createElement("span");
  spanli.classList.add("todotext");
  spanli.textContent = `${todo}`;
  taskli.appendChild(spanli);

  let icon = document.createElement("i");
  icon.classList.add("fa", "fa-trash", "delete");
  taskli.appendChild(icon);
  console.log(taskli);
  // const html = `
  //    <li class="text-center">
  //         <span>${todo}</span>
  //         <i class="fa fa-trash delete" aria-hidden="true"></i>
  //       </li>
  //   `;
  // ullist.innerHTML += html;

  ullist.appendChild(taskli);
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(addForm.add.value);
  // const li = document.createElement('li');
  let todo = addForm.add.value.trim();
  // ullist.prepend(li);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("please enter something");
  }
});

// using event delegation to delete todos -- Mario's brilliant Idea :) but our implementation
ullist.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("todotext")) {
    taskCompleter(e.target);
  }
});
