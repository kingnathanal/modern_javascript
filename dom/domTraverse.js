let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//Types of nodes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children element nodes
//val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// children of children
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';
// first child
val = list.firstChild;
val = list.firstElementChild;
// last child
val = list.lastChild;
val = list.lastElementChild;
// Count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);