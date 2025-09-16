import React, {useEffect, useState} from 'react';
import BookCard from './components/BookCard';
import './main.css';

const isbnList = ["9781484238516", "9781593275662";

// json list of ISBNs to fetch book data for
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

