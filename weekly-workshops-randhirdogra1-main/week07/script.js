// Exploring URL Hashes
import { split_hash } from "./util.js"

// allBooks is a global variable that will hold the array
// of books loaded from the JSON file
let allBooks = []

// loadData will load the JSON data using fetch
// and call redraw() when it is ready
const loadData = () => {
    fetch('./books.json')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
    allBooks=data.books
    redraw()
})

.catch((error) =>{
    console.error("Error");
    console.error(error)
})
}

const getBook = (id) =>{
    for(let i=0; i <allBooks.length; i++){
        if (allBooks[i].id == id){
            return allBooks[i]
        }
    }
    return null
}

const getBooks = () =>{
    return allBooks
}
// redraw is called whenever the page needs to be 
// updated, it calls the appropriate view function
const redraw = () => {
    const pathInfo = split_hash(window.location.hash)

    if(pathInfo.path == "books"){
        if(pathInfo.id){
            const book = getBook(pathInfo.id)
            bookView('content', book)
        }else{
            const books = getBooks()
            bookListView('content', books)
        }
    }else{
        viewHome('content')
    }
}

const viewHome = (id) =>{
    const target = document.getElementById(id);
    let text= '<h1> Home Page </h1> <p> Lorem Ipsum is dummy text </p>'
    target.innerHTML = text;
}

function bookView(id, book){
    const template = Handlebars.compile(`
    {{#each book}}
    <d1>
    <dt> {{title}}</dt>
    <dd>{{author}}</dd>
    </d1>
    {{/each}} 
    `);
}

window.onload = loadData;
window.onhashchange = redraw;


