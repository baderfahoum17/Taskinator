// ------------------------------ testing function
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
// ------------------------------ The todoList logic
// our selectors
const addForm = document.querySelector(".add");
const ullist = document.querySelector(".todos");
const search = document.querySelector(".search input");

// const delete = document.querySelector(".delete");

console.log(ullist);
// ------------------------------  the template generator, which creates a different markup for a MAIN LI which could contain other LIs and differentiate with a SUB LI - with does not
const generateTemplate = (todo, elementToAdd, targetEl = ``) => {
  //create the li
  let taskli = document.createElement("li");
  taskli.classList.add("text-center");
  // format the markup
  let spanli = document.createElement("span");
  spanli.classList.add("todotext");
  spanli.textContent = `${todo}`;

  taskli.appendChild(spanli);
  // this is all the elements all li should contain
  let divGrouper = document.createElement("div");
  divGrouper.classList.add("igroup");
  let trash = document.createElement("i");
  let plus = document.createElement("i");
  trash.classList.add("fa", "fa-trash", "delete");
  plus.classList.add("fa", "fa-plus", "plus");
  divGrouper.appendChild(trash);
  taskli.appendChild(divGrouper);
  // console.log(taskli);
  // if its a mainn LI the flag should be with ul
  if (elementToAdd === "ul") {
    taskli.classList.add("main");
    taskli.lastChild.prepend(plus);
    ullist.appendChild(taskli);
  }
  /// a sub li element
  if (elementToAdd === "li") {
    taskli.classList.add("subli");
    taskli.querySelector("span").classList.add("insideli");
    targetEl.parentElement.parentElement
      .querySelector("span")
      .appendChild(taskli);
  }

  return taskli;
};
// the form selector
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const templateFlag = "ul";
  // console.log(addForm.add.value);
  // const li = document.createElement('li');
  let todo = addForm.add.value.trim();
  // ullist.prepend(li);
  if (todo.length) {
    generateTemplate(todo, templateFlag);
    addForm.reset();
  } else {
    alert("please enter something");
  }
});

// using event delegation to delete todos -- Mario's brilliant Idea :) but our implementation
ullist.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("todotext")) {
    taskCompleter(e.target);
  }

  if (e.target.classList.contains("plus")) {
    console.log(e.target.parentElement.parentElement);
    let templateFlag = "li";
    let todo = addForm.add.value.trim();
    // ullist.prepend(li);
    if (todo.length) {
      generateTemplate(todo, templateFlag, e.target);
      addForm.reset();
    } else {
      alert("please enter something");
    }
  }
});

//----------------------------- filter and search logic
const filterTodos = (term) => {
  //filter words that doesnt include the word, add a filtered class to them to remove them from the list
  Array.from(ullist.children)
    .filter((todoItem) => {
      return !todoItem.textContent.toLowerCase().includes(term);
      // console.log(todoItem.textContent);
      // return true;
    })
    .forEach((todoItem) => {
      todoItem.classList.add("filtered");
    });
  // // shorter syntax but less readable for newcomers:
  // Array.from(ullist.children)
  //     .filter((todoItem) => !todoItem.textContent.includes(term))
  //     .forEach((todoItem) => todo.classList.add('filtered'));

  // remove filtered when the word is in the text
  Array.from(ullist.children)
    .filter((todoItem) => {
      return todoItem.textContent.toLowerCase().includes(term);
    })
    .forEach((todoItem) => {
      todoItem.classList.remove("filtered");
    });

  return Array.from(ullist.children).filter((todoItem) => {
    return todoItem.textContent.toLowerCase().includes(term);
  });
};

//keyup event - this will fire out search logic
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();

  filterTodos(term);
});
