import React from 'react';


const Book = ({id, image, link, title, description, author, handleSave}) => {

  return (
    <div>
      <div className="book" key={id}>
          <div className="book title image">
            <h3><a href={link} target="_blank">{title}</a></h3>
          </div>
          <div className="book img-block">
            <img src={image} className="book_img" />
          </div>
          <div className="book_desc">
            <div className="book-field" title="author">
              <strong>Author:</strong> {author || 'Not Labeled'}
            </div>
            <div className="book-field">
              <strong>Description:</strong> {description}
            </div>
          </div>
        </div>
        <button onClick={() => handleSave(id, author, title, image, link, description)}> <strong> Save </strong></button>
    </div>
    );

}




export default Book;
