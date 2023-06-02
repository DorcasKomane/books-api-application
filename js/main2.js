document.querySelector('button').addEventListener('click', getBooks);

function getBooks(){

    let authorName = document.querySelector('input').value;
    
    const tbl = document.createElement('table');
    const tblHeader = document.createElement('theader');
    const tblBody = document.createElement('tbody');

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&key=AIzaSyA8dzdC5M-wByAbu0BmoZh8y_lrVvj3f6Y`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {

        for(let i = 0; i < data.items.length; i++){
            console.log(data.items[i]);
    
            const row = document.createElement('tr');
    
            let authors = data.items[i].volumeInfo.authors;
            let title = data.items[i].volumeInfo.title;
            let pubDate = data.items[i].volumeInfo.publishedDate;
    
            let previewLink = document.createElement('a');

        } 

        for(let i = 0; i < data.items.length; i++){

            const row = document.createElement('tr');

            for(let j = 0; j < 3; j++){
                const cell = document.createElement('td');
                const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            tblBody.appendChild(row);
        }

        tbl.appendChild(tblHeader);
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute('border', '2');
        

        
    })
    .catch( err => {
        console.log(`error ${err}`);
    });
}
