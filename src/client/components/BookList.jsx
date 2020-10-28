import React from 'react';
import image from './image.png';

const BookList = ({books, handleSave, bookList, getBooks, deleteBook}) => {

  console.log(bookList)

  let renderedSavedBooks = bookList.map((item) => {
    console.log(item.id)
    return (
      <li>
        <ul>{item.author}</ul>
        <ul>{item.title}</ul>
        <button onClick={() => deleteBook(item.id)}> Delete </button>
      </li>
    )
  })

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
        <button onClick={() => handleSave(book.id, book.volumeInfo.authors[0], book.volumeInfo.title)}> Save </button>
      </div>

    )
  })

  return (
    <div>
      <div>
        <button onClick={() => getBooks()}> Show Saved Books </button>
        <div>{renderedSavedBooks}</div>
      </div>
      <div> {renderedList} </div>
    </div>
  )
}


export default BookList;