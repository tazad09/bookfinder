import React from 'react';


const SavedBooks = ({id, image, link, title, description, author, deleteBook}) => {

  return (
    <div className="book" key={id}>
        <div className="book__title">
          <h3><a href={link} target="_blank">{title}</a></h3>
        </div>
        <div className="book__img-block">
          <img src={image} className="book__img" />
        </div>
        <div className="book__desc">
          <div className="book__field" title="author">
            <strong>Author:</strong> {author || 'Not Labeled'}
          </div>
          <div className="book__field">
            <strong>Description:</strong> {description}
          </div>
        </div>
        <button onClick={() =>deleteBook(id)}> Delete </button>
      </div>
    );

}




export default SavedBooks;
