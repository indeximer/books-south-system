import React from 'react';
import PropTypes from 'prop-types';
import noCover from '../img/No-cover-placeholder.png';

Book.propTypes = {
    book: PropTypes.object.isRequired
}

function Book(props){

    const book = props.book.volumeInfo;
    const title = book.title;
    const authors = book.authors;
    const cover = book.imageLinks.thumbnail || book.imageLinks.smallThumbnail || noCover;

    return(
        <li className="book-list-item col s6 m4 l2">
            <img className="cover" src={cover} alt={title} />
            <p className="title">{title}</p>
            <p className="authors">{authors && authors.map((author) =>(
                    <span key={author} className="book-authors">{author}</span>
                ))}
            </p>
        </li>
    );
}

export default Book;