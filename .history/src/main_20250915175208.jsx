import React, {useEffect, useState} from 'react';
import BookCard from './components/BookCard';
import './main.css';


// 
useEffect(() => {
    async function fetchBooks() {
        try {
            const results = await Promise.all(
                isbnList.map((isbn) =>
                    fetch(`https://api.itbook.store/1.0/books/${isbn}`).then((res) =>
                        res.json()
            )
        )
    );
    setBooks(results);
} catch (error) {
    console.error("Error fetching books:", error);
}
}

fetchBooks();
}, []);


// UI for book card component

// function BookCard() {
//     const linkLabel = props.learnMore;
//     const image = props.image;
//     const title = props.title;
//     const author = props.author;


//     return (
//         <div className="book-card">
//             <img className="book-image">(props.image)</img>
//             <h2 className="book-title">(props.title)</h2>
//             <h3 className="book-author">(props.author)</h3>
//             <a className="info-button">(linkLabel)</a>
//         </div>
//     )
// }