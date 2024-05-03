function drawABook(id){
    let book = model.data.Books.find((book) => book.id == id)
    return `
            <div class="book">
            <img class="bookCover" onclick="chooseBook(${book.id})" src="${book.cover}"><br/>
            <b>Name:</b> ${book.name}<br/>
            ${book.series ? '<b>Series:</b> ' + book.series : ''}<br/>
            <b>Author:</b> ${book.author}<br/>
            <b>Release year:</b> ${book.releaseYear}
            </div>

    `;
}

function chooseBook(id){
    let selectedBook = model.app.selectedBook;
    selectedBook = id;
    console.log(id)
}


function drawABookInLibrary(id){
    let book = model.data.Books.find((book) => book.id == id)
    return `
            <div class="libraryBook">
            <img class="libraryCover" onclick="chooseBook(${book.id})" src="${book.cover}"><br/>
            <b>Name:</b> ${book.name}<br/>
            </div>

    `;
}