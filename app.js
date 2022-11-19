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

// Example code for how to update CSS variables. Use this for updating the themes
// let root = document.documentElement;

// root.addEventListener("mousemove", e => {
//   root.style.setProperty('--mouse-x', e.clientX + "px");
//   root.style.setProperty('--mouse-y', e.clientY + "px");
// });
