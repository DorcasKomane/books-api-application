document.querySelector('button').addEventListener('click', getBooks);

function getBooks(){
    let authorName = document.querySelector('input').value;
    let bookList = document.getElementById('book-list');
    let bookListItems = document.getElementById('bookListItems');

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&key=AIzaSyA8dzdC5M-wByAbu0BmoZh8y_lrVvj3f6Y`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {

        for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);

        let entry = document.createElement('li');
        // let subList = createNestedList('li');
        let authors = data.items[i].volumeInfo.authors;
        let title = data.items[i].volumeInfo.title;
        let pubDate = data.items[i].volumeInfo.publishedDate;

        let previewLink = document.createElement('a');
        // previewLink = data.items[i].volumeInfo.previewLink;

        let linkText = document.createTextNode('preview');
        previewLink.appendChild(linkText);

        let coverImg = document.createElement('img');
        coverImg.src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
        
        // entry.appendChild(document.createTextNode(authors));
        // // bookListItems.appendChild(document.createTextNode(authors));
        // bookList.appendChild(entry);

        
        entry.appendChild(document.createTextNode(title));
        // bookListItems.appendChild(document.createTextNode(title));
        bookList.appendChild(entry);
 
        // entry.appendChild(document.createTextNode(pubDate));
        // bookListItems.appendChild(entry);

        entry.appendChild(document.createTextNode(previewLink));
        bookListItems.appendChild(entry);

        entry.appendChild(coverImg);
        bookList.style.listStyle = 'none';

        } 
    })
    .catch( err => {
        console.log(`error ${err}`);
    });
}



   

