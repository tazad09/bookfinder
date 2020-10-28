import React from 'react';
import image from './image.png';

const BookList = ({books, handleClick}) => {

  let renderedList = books.map((book) => {
    //console.log(book)
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
          <button onClick={() => handleClick(book.volumeInfo.authors, book.volumeInfo.title)}> Save </button>
        </div>
      </div>

    )
  })

  return (
    <div> {renderedList} </div>
  )
}


export default BookList;