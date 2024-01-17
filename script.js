const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault()

    if (
        !document.getElementById("title").checkValidity() ||
        !document.getElementById("author").checkValidity() ||
        !document.getElementById("pages").checkValidity()
    ) { alert("Fill the fields bro") }
        

    else { 
    
    const newBook = new createBook()
    
    const container = document.createElement("div");
    container.classList.add("container")

    let result
    const bookTitle = document.createElement("h3")
    bookTitle.textContent = `"${newBook.title}"`

    const bookAuthor = document.createElement("a")
    bookAuthor.textContent = newBook.author

    const bookPages = document.createElement("a")
    bookPages.textContent = `${newBook.pages} Pages`
    
    console.log("chegou até aqui")

    let bookRead = ""
    if(newBook.read === "YES") {
        bookRead = document.createElement("button")
        bookRead.classList.add("readBtn")
        bookRead.textContent = "Read"
    }
    else if (newBook.read === "NO") {
        bookRead = document.createElement("button")
        bookRead.classList.add("unreadBtn")
        bookRead.textContent = "Not Read"
    }

    result = [bookTitle, bookAuthor, bookPages, bookRead]
    
    result.forEach(element => {
        container.appendChild(element)
    })

    const superContainer = document.querySelector(".superContainer")
    const bigContainer = document.createElement("div");
    bigContainer.classList.add("bigContainer")

    const createBtn = document.createElement("button")
    createBtn.classList.add("removeBtn")
    
    const createImg = document.createElement("img")
    createImg.src = "/trash-can-outline.svg"
    createBtn.appendChild(createImg)

    createImg.addEventListener("click", () => {
        bigContainer.parentNode.removeChild(bigContainer)
    })

    superContainer.appendChild(bigContainer)
    bigContainer.appendChild(container)
    bigContainer.appendChild(createBtn)

    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("pages").value = ""
    
    console.log(newBook)
}});

function createBook() {
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value; 
    this.read = document.querySelector('input[name="option"]:checked').value;
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
