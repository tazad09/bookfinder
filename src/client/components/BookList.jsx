import React from 'react';
import Book from './Book';
import SavedBooks from './SavedBooks';

const BookList = ({books, bookList, handleSave, deleteBook, getBooks}) => {


  let renderedSavedBooks = bookList.map((item) => {

    return (
      <SavedBooks
        id={item.id}
        image={item.image}
        link={item.link}
        title={item.title}
        description={item.description}
        author={item.author}
        deleteBook={deleteBook}
      />
    )
  })

  let renderedList = books.map((book) => {
    return (
      <Book
        id={book.id}
        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'Image is not available'}
        link={book.volumeInfo.infoLink}
        title={book.volumeInfo.title}
        description={book.searchInfo?book.searchInfo.textSnippet : 'Description is not available'}
        author={book.volumeInfo.authors[0]}
        handleSave={handleSave}
      />
    )
  })

  return (
    <div>
      <div>
        <button onClick={() => getBooks()}> Show Saved Books </button>
        <div>{renderedSavedBooks === [] ? alert('empty') : renderedSavedBooks}</div>
      </div>
      <div> {renderedList} </div>
    </div>

  )
}


export default BookList;