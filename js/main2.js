document.querySelector('button').addEventListener('click', getBooks);

function getBooks(){

    let authorName = document.querySelector('input').value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&key=AIzaSyA8dzdC5M-wByAbu0BmoZh8y_lrVvj3f6Y`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {
        console.log(data.items[0].volumeInfo);
        
        let bookEntries = ' ';

        // (data.items).map(() => {
        //     bookEntries = `<tr>
        //                         <td>${data.items.volumeInfo.title}</td>
        //                         <td>${data.items.volumeInfo.publisher}</td>
                                
        //                    </tr>`;
        // });

        for(let i = 0; i < data.items.length; i++){
            console.log()
            bookEntries += `<tr>
                                <td>${data.items[i].volumeInfo.title}</td>
                                <td>${data.items[i].volumeInfo.publisher}</td>
                                <td><img src="${data.items[i].volumeInfo.imageLinks.smallThumbnail}"></td>
                                <td><a href="${data.items[i].volumeInfo.previewLink}" target=_blank>Preview</a></td>
                            </tr>`;
        }

        // 
        document.getElementById('tableBody').innerHTML = bookEntries;

    })
    .catch( err => {
        console.log(`error ${err}`);
    });
}
