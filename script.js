const myLibrary = [];

function Book(title, author, page, read){
    if (!new.target){
        throw Error("Must use the new operator to call the function");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.page = page;
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
    const main = document.querySelector("body");
    for (const book of myLibrary){
        const container = document.createElement("div");
        container.classList.add("book");
        container.textContent = `  ${book.title} by ${book.author}
                Pages: ${book.page}
                Status: ${book.read ? "Read" : "Not read"}
            `;
        main.appendChild(container);
}
};
renderLibrary();