const submitBtn = document.getElementById("submit");
const appendContainer = document.querySelector(".appendContainer")
const container = document.querySelector(".container")
const novoContainer = document.createElement("div");
novoContainer.classList.add("container")

submitBtn.addEventListener("click", function() {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    let result
    const bookTitle = document.createElement("h3")
    bookTitle.textContent = title

    const bookAuthor = document.createElement("a")
    bookAuthor.textContent = author

    const bookPages = document.createElement("a")
    bookPages.textContent = pages

    result = [bookTitle, bookAuthor, bookPages]
    
    result.forEach(element => {
        novoContainer.appendChild(element)
    })

    const newBook = new createBook(title, author, pages)
    appendContainer.appendChild(novoContainer)

    console.log(newBook)
});

function createBook(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
    // this.haveU = haveU
}

const readBtn = document.getElementById("readBtn");
readBtn.addEventListener("click", () => {
    changeColor(readBtn)
});

function changeColor(btn) {

    if(btn.classList.contains("readBtn")) { 
        btn.classList.remove("readBtn")
        btn.classList.add("unreadBtn")
        btn.innerHTML = "Not read"
    }
    else {
        btn.classList.remove("unreadBtn")
        btn.classList.add("readBtn")
        btn.innerHTML = "Read"
    }

}
