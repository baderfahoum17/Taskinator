test("This should test trimming all extra whitespaces", (t) => {
  t.equal(whiteSpaces("    hello world     "), "hello world");
  t.equal(whiteSpaces(" hello world     "), "hello world");
});

test("This should test adding a strike though for a given text", (t) => {
  t.equal(
    taskCompleter(
      '<span class="todotext">test for a ro7 eshtri baqdones</span>'
    ),
    '<span class="todotext striked">test for a ro7 eshtri baqdones</span>'
  );
});
