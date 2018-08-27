import React from "react";
import Container from './Container';

function ListBooks() {
    return(
        <Container>
            <ul className="book-list row">
                <li className="book-list-item col s6 m4 l2">
                    <img className="cover" src="http://books.google.com/books/content?id=z_JRBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Um Pouco Mais Sobre Harry Potter" />
                    <p className="title">Um Pouco Mais Sobre Harry Potter</p>
                    <p className="authors">Lucas Hernandes</p>
                </li>
            </ul>
        </Container>
    );
}

export default ListBooks;