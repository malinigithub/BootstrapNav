// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
  // fetch the page, use await
  console.log(page);
  //page = page.replace('#','')
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById("content");
  element.innerHTML = content;
  // set innerHTML of the element
  // your code goes here
}
