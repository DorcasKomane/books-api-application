document.querySelector('button').addEventListener('click', getBooks);

function getBooks(){

    let authorName = document.querySelector('input').value;
    let bookList = document.getElementById('book-list');

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&key=AIzaSyA8dzdC5M-wByAbu0BmoZh8y_lrVvj3f6Y`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {

        console.log(data.items[0]);

        for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);

        let entry = document.createElement('li');
        let authors = data.items[i].volumeInfo.authors;
        let title = data.items[i].volumeInfo.title;
        let pubDate = data.items[i].volumeInfo.publishedDate;

        let previewLink = document.createElement('a');
        // previewLink = data.items[i].volumeInfo.previewLink;

        // let linkText = document.createTextNode('preview');
        // previewLink.appendChild(linkText);

        let coverImg = document.createElement('img');
        coverImg.src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
        
        entry.appendChild(document.createTextNode(authors));
        bookList.appendChild(entry);

        entry.appendChild(document.createTextNode(title));
        bookList.appendChild(entry);
 
        entry.appendChild(document.createTextNode(pubDate));
        bookList.appendChild(entry);

        entry.appendChild(document.createTextNode(previewLink));
        bookList.appendChild(entry);

        // bookList.appendChild(coverImg);

        // entry.style.fontFamily = 'Roboto';
        // document.getElementById('items-container').style.width = '1200px';

        // document.getElementById('book-list').style.width = '1200px';
        // document.getElementById('book-list').style.display = 'flex'; 
        // document.getElementById('book-list').style.flexDirection = 'column';
        // document.getElementById('book-list').justifyContent = 'space-between';
        // document.getElementById('book-list').flexWrap = 'wrap';
        // // entry.style.flexGrow = '1';
        // // entry.style.height =  '200px';

        // bookList.style.color = 'red';
        // bookList.style.color = 'red';

            // bookList.style.display = 'flex';
            // bookList.style.width = '1000px';
            bookList.style.listStyle = 'none';

        // document.querySelector('h2').innerText = data.items[i].volumeInfo.authors;
        // document.querySelector('h3').innerText = data.items[i].volumeInfo.title;
        // document.querySelector('#pubDate').innerText = data.items[i].volumeInfo.publishedDate;
        // document.querySelector('img').src = data.items[i].volumeInfo.imageLinks.smallThumbnail;


        } 
    })
    .catch( err => {
        console.log(`error ${err}`);
    });
}

