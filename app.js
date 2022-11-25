let myLibrary = [];
let bookObj;
let colorIncrement = 0;
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
	bookObj = Object.fromEntries(fd);
	const json = JSON.stringify(bookObj);
	localStorage.setItem("form", json);

	myLibrary.push(bookObj);
	console.log(myLibrary);
	addElement(bookObj);
});

function addElement(bookObject) {
	const newCard = document.createElement("card");
	console.log(bookObject.title);
	const title = document.createElement("p");
	const titleContent = document.createTextNode(`Title: ${bookObj.title}`);
	title.appendChild(titleContent);
	const author = document.createElement("p");
	const authorContent = document.createTextNode(`Author: ${bookObject.author}`);
	author.appendChild(authorContent);
	const length = document.createElement("p");
	const lengthContent = document.createTextNode(
		`Length: ${bookObject.bookLength}`
	);
	length.appendChild(lengthContent);
	const readBtn = document.createElement("button");
	if (bookObject.isRead != null && bookObject.isRead == "isRead") {
		readBtn.innerHTML = "Read";
		const bookClassList = newCard.classList;
		bookClassList.add("greyed-out");
	} else {
		readBtn.innerHTML = "Unread";
	}
	readBtn.addEventListener("click", function callIsRead() {
		isRead(readBtn);
	});

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
	if (colorIncrement > 2) {
		colorIncrement = 0;
	}
	if (colorIncrement == 0) {
		primary = "#D4F2FC";
		secondary = "#B5A081";
		accent = "#FF6240";
	}
	if (colorIncrement == 1) {
		primary = "#AEB3D1";
		secondary = "#8190B5";
		accent = "#89FF40";
	}
	if (colorIncrement == 2) {
		primary = "#ffffec";
		secondary = "#81b5a8";
		accent = "#40e0ff";
	}
	let root = document.documentElement;
	root.addEventListener("click", (e) => {
		root.style.setProperty("--primary-clr", primary);
		root.style.setProperty("--secondary-clr", secondary);
		root.style.setProperty("--accent-clr", accent);
	});
	console.log(colorIncrement);
	colorIncrement++;
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
