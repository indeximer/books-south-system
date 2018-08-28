import React from "react";
import Container from './Container';
import Book from './Book';

function ListBooks() {
    return(
        <Container>
            <ul className="book-list row">
                <Book/>
            </ul>
        </Container>
    );
}

export default ListBooks;