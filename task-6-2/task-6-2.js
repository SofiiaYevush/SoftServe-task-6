const h1 = document.querySelector('h1');
h1.style.backgroundColor = '#90EE90';

const paragraphs = document.querySelectorAll('#myDiv p');
const firstParagraph = paragraphs[0];
const secondParagraph = paragraphs[1];
const thirdParagraph = paragraphs[2];
const fourthParagraph = paragraphs[3];

firstParagraph.style.fontWeight = 'bold';
secondParagraph.style.color = 'red';
thirdParagraph.style.textDecoration = 'underline';
fourthParagraph.style.fontStyle = 'italic';

const list = document.getElementById('myList');
const listItems = myList.getElementsByTagName("li");
let concatenatedText = "";
for (let i = 0; i < listItems.length; i++) {
    concatenatedText += listItems[i].textContent;
}
listItems[0].textContent = concatenatedText; // запис в перший елемент li
for (let i = listItems.length - 1; i > 0; --i) { // видалення всіх  решту li
    listItems[i].remove();
}
myList.style.listStyleType = "none";// позбуваюся маркування

const spanElement = document.querySelector('span');
spanElement.style.opacity = 0;