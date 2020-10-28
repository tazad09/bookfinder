import React from 'react';


const ShowSavedBooks = (props) => {

  let renderedList = books.map((book) => {
    return (
      <div>
        <div className="ui link cards" key={book.id}>
          <div className="card">
            <div>
              {book.volumeInfo.imageLinks?<img src={book.volumeInfo.imageLinks.thumbnail}/> : null}
            </div>
            <div className="content">
              <div className="header">
                <a href={book.volumeInfo.infoLink} target="_blank">
                  {book.volumeInfo.title}
                </a>
              </div>
              <div className="description"> {book.searchInfo?book.searchInfo.textSnippet : null}</div>
            </div>
            <div className="extra content">
              <div className="left floated"> {book.volumeInfo.authors} </div>
            </div>
          </div>
        </div>
        <button onClick={() => handleSave(book.volumeInfo.authors, book.volumeInfo.title, book.id)}> Save </button>
      </div>

    )
  })
}


export default ShowSavedBooks;