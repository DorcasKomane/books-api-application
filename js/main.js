document.querySelector('button').addEventListener('click', getBooks);

function getBooks(){

    let authorName = document.querySelector('input').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&key=AIzaSyA8dzdC5M-wByAbu0BmoZh8y_lrVvj3f6Y`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {
        for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i]);
        document.querySelector('h2').innerText = data.items[i].volumeInfo.authors;
        document.querySelector('h3').innerText = data.items[i].volumeInfo.title;
        document.querySelector('#pubDate').innerText = data.items[i].volumeInfo.publishedDate;
        document.querySelector('img').src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
        } 
    })
    .catch( err => {
        console.log(`error ${err}`);
    });
}



   

