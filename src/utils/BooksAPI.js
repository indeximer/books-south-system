const searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

const apiKey = 'AIzaSyD4WlsR6ORwFqsNg81PdfM_Sn7a5vY46Gc';

export const search = (query, startIndex =0) =>
    fetch(`${searchUrl}${query}+intitle&startIndex=${startIndex}&maxResults=12&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => data.items);