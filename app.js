let myLibrary = [];
const resultsPanel = document.getElementById("resultsPanel");
const form = document.querySelector("form");
class Card extends HTMLElement {
	constructor() {
		super();
		const template = document.getElementById("card");
		const node = document.importNode(template.content, true);
		this.appendChild(node);
	}
}
customElements.define("library-card", Card);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const fd = new FormData(form);
	const obj = Object.fromEntries(fd);
	const json = JSON.stringify(obj);
	localStorage.setItem("form", json);
	// for (item of fd) {
	// 	console.log(item);
	// }
});

function Book(bookTitle, bookAuthor, bookPages) {
	// Constructor
	const title = this.bookTitle;
	const author = this.bookAuthor;
	const pages = this.bookPages;
	let isRead = true;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function addElement() {
	// The below variable is the form information entered in the page This video shows what I'm attempting https://youtu.be/7LGpIQ6ceJs
	const title = document.createElement("p");
	const titleContent = document.createTextNode("Title: ");
	title.appendChild(titleContent);
	const author = document.createElement("p");
	const authorContent = document.createTextNode("Author: ");
	author.appendChild(authorContent);
	const length = document.createElement("p");
	const lengthContent = document.createTextNode("Length: ");
	length.appendChild(lengthContent);
	const readBtn = document.createElement("button");
	// readBtn.onclick = function isRead(readBtn);
	readBtn.addEventListener("click", function callIsRead() {
		isRead(readBtn);
	});
	readBtn.innerHTML = "Unread";

	const newCard = document.createElement("card");
	newCard.appendChild(title);
	newCard.appendChild(author);
	newCard.appendChild(length);
	newCard.appendChild(readBtn);
	resultsPanel.appendChild(newCard);
}

function changeTheme(primary, secondary, accent) {
	primary = this.primary;
	secondary = this.secondary;
	accent = this.accent;
	if (primary == null) {
		primary = "#D4F2FC";
		secondary = "#B5A081";
		accent = "#FF6240";
	}

	let root = document.documentElement;
	root.addEventListener("click", (e) => {
		root.style.setProperty("--primary-clr", primary);
		root.style.setProperty("--secondary-clr", secondary);
		root.style.setProperty("--accent-clr", accent);
	});
}

function isRead(toggleBtn) {
	const list = toggleBtn.parentElement.classList;
	if (toggleBtn.innerHTML == "Unread") toggleBtn.innerHTML = "Read";
	else toggleBtn.innerHTML = "Unread";
	list.toggle("greyed-out");
}

// Example code for how to update CSS variables. Use this for updating the themes
// let root = document.documentElement;

// root.addEventListener("mousemove", e => {
//   root.style.setProperty('--mouse-x', e.clientX + "px");
//   root.style.setProperty('--mouse-y', e.clientY + "px");
// });
