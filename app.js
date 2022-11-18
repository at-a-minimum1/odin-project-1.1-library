let myLibrary = [];
const resultsPanel = document.getElementById("resultsPanel");
class Card extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define("card", Card);

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
	const newCard = document.createElement("card");
	resultsPanel.appendChild(newCard);
	console.log("Button-works");
}
