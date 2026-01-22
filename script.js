const myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target){
        throw Error("Must use the new operator to call the function");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('The Shinning', "Stepheng King", 192, true);
addBookToLibrary('The Bible', "JC himself", 1000, false);
addBookToLibrary('Finding Nemo', "IDK", 1, true);

function renderLibrary(){
    const main = document.querySelector(".display");
    main.innerHTML = "";
    for (const book of myLibrary){
        const container = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = `${book.title} by ${book.author}`;
        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        const status = document.createElement("p");
        status.textContent = `Status: ${book.read ? "Read" : "Not read"}`;

        const deleteButton = document.createElement("button");
        const readButton = document.createElement("button");

        container.classList.add("book");
        deleteButton.classList.add("delButton")
        deleteButton.textContent = "Delete"
        readButton.classList.add("rButton")
        readButton.textContent = "Change Status"
        
        container.append(title, pages, status, readButton, deleteButton);
        main.appendChild(container);

        readButton.addEventListener("click", () => {
            book.read = !book.read;
            renderLibrary();
})
        deleteButton.addEventListener("click", () => {
            const index = myLibrary.findIndex((currentBook) => currentBook.id === book.id);
            myLibrary.splice(index, 1);
            renderLibrary();
        });
}
};
renderLibrary();