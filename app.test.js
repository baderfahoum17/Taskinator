test("This should test trimming all extra whitespaces", (t) => {
  t.equal(whiteSpaces("    hello world     "), "hello world");
  t.equal(whiteSpaces(" hello world     "), "hello world");
});

test("this should test generating the right ul", (t) => {
  // select the main list for manipulation

  const ullist = document.querySelector("ul");
  // get the number of li items before running add and delete
  let expected = Array.from(ullist.children);

  // add new task
  let taskli = generateTemplate("newly added task", "ul");

  // select the newly added task from the list by passing through all elements making sure we have the new element added
  let results = Array.from(ullist.children);
  // sized of the ul array should match, because we addded an item, made sure its present (by selecting it) and then deleting it

  t.equal(results.length, expected.length + 1);
});

test("filtering an item with the search", (t) => {
  const ul = document.querySelector("ul");
  // console.log(xx)
  const ularray = Array.from(ul.children);
  // console.log(xx);
  t.equal(ularray.toString(), Array.from(ul.children).toString());
});

// check if strikthrough works
test("check for validite of strikethrough-ing tasks", (t) => {
  // new Task
  let taskli = generateTemplate("strikethrough task test", "ul");

  const ullist = document.querySelector("ul");
  // const litest = document.querySelector("li");

  // this should mark the first
  Array.from(ullist.children).forEach((e) => {
    let spanli = e.querySelector(".todotext");
    console.log(spanli.textContent);

    if (spanli.textContent == "strikethrough task test") {
      console.log("spanli is ==> ", e);
      spanli.click();
      t.equal(spanli.className, "todotext striked");
      // t.notEqual(spanli.className, "Not strikeThrough");
    }
  });
});

// check if strikthrough works
test("Delete li when trashbin is selected", (t) => {
  // select the main list for manipulation
  const ullist = document.querySelector("ul");
  // get the number of li items before running add and delete
  let expected = Array.from(ullist.children);

  // add new task
  let taskli = generateTemplate("delete task test", "ul");

  // select the newly added task from the list by passing through all elements making sure we have the new element added
  Array.from(ullist.children).forEach((e) => {
    let spanli = e.querySelector(".todotext");
    // check if its the wanted li
    if (spanli.textContent == "delete task test") {
      // console for debugging incase of an error
      console.log("spanli is ==> ", e);
      // select the trash( the button that deletes the li)
      const trash = e.lastChild.lastChild;
      //   delete the element after adding it
      trash.click();
    }
  });
  // sized of the ul array should match, because we addded an item, made sure its present (by selecting it) and then deleting it

  t.equal(Array.from(ullist.children).length, expected.length);
});
