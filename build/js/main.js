const initApp = () => {
    const openButtons = document.querySelectorAll(".add-book-button");
    const cancelButton = document.getElementById("cancel");
    const submitButton = document.querySelector("[type='submit']");
    const bookForm = document.getElementById("book-form");
    const myLibrary = [];

    function Book(title, author, pages, readOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;
        this.info = () => {
            return `${title} by ${author}, ${pages} pages. Read: ${readOrNot}`;
        }
    }   

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    function toggleForm() {
        bookForm.classList.toggle("hidden");
        bookForm.classList.toggle("grid");
    }

    openButtons.forEach((button) => {
        button.addEventListener("click", toggleForm);
    });

    bookForm.addEventListener("click", (e) => {
        if (e.target === bookForm) {
            toggleForm();
        }
    });

    cancelButton.addEventListener("click", toggleForm)
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleForm();
    })
}

document.addEventListener("DOMContentLoaded", initApp);