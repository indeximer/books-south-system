import React from "react";
import Container from './Container';
import Book from './Book';
import PropTypes from 'prop-types';

ListBooks.propTypes = {
    books: PropTypes.array.isRequired
}

function ListBooks(props) {
    return(
        <Container>
            <ul className="book-list row">
                {props.books.map((book) => (
                    <Book book={book} key={book.id}/>
                ))}
            </ul>
        </Container>
    );
}

export default ListBooks;