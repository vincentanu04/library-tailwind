const initApp = () => {
    const openButtons = document.querySelectorAll(".add-book-button");
    const cancelButton = document.getElementById("cancel");
    const submitButton = document.querySelector("[type='submit']");
    
    const formSection = document.getElementById("book-section");
    const bookForm = document.getElementById("book-form");
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");
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

    function removeBookFromLibrary(bookIndex) {
        myLibrary.splice(bookIndex, 1);
    }

    function toggleForm() {
        formSection.classList.toggle("hidden");
        formSection.classList.toggle("grid");
    }

    function displayBooks(myLibrary) {
        document.getElementById("books").innerHTML = "";
        let index = 0;
        myLibrary.forEach((book) => {
            let templateClone = document.getElementById("template").cloneNode(true);
            templateClone.querySelector("#title-template").textContent = book.title;
            templateClone.querySelector("#author-template").textContent = `by ${book.author}`;
            templateClone.querySelector("#pages-template").textContent = `${book.pages} pages`;
            templateClone.querySelector("#read-template").textContent = `Read: ${book.readOrNot}`;
            templateClone.classList.remove("hidden");
            templateClone.classList.add("flex");
            templateClone.dataset.index = index;

            templateClone.querySelector(".delete-button").addEventListener("click", () => {
                removeBookFromLibrary(templateClone.dataset.index);
                displayBooks(myLibrary);
            });

            document.getElementById("books").appendChild(templateClone);
            index++;
        });
    }

    openButtons.forEach((button) => {
        button.addEventListener("click", toggleForm);
    });

    formSection.addEventListener("click", (e) => {
        if (e.target === formSection) {
            toggleForm();
        }
    });

    cancelButton.addEventListener("click", toggleForm);
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const formInputs = [titleInput, authorInput, pagesInput, readInput];
        let atLeastOne = false;
        formInputs.forEach(input => { /* Maybe should use for of */
            if (input.value.trim() === "") {
                if(!input.classList.contains("border-red-600")) {
                    input.classList.toggle("border-theme-primary");
                    input.classList.toggle("border-red-600");
                }
                atLeastOne = true;
            }
            else {
                if(input.classList.contains("border-red-600")) {
                    input.classList.toggle("border-theme-primary");
                    input.classList.toggle("border-red-600");
                };
            }
        });
        if (atLeastOne) return;
        const newBook = new Book(
            titleInput.value,
            authorInput.value,
            pagesInput.value,
            readInput.value);

        bookForm.reset();
        addBookToLibrary(newBook);
        displayBooks(myLibrary);
        toggleForm();
    });
}

document.addEventListener("DOMContentLoaded", initApp);