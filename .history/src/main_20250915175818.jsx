import React, {useEffect, useState} from 'react';
import BookCard from './components/BookCard';
import './main.css';

function App() {

const [books, setBooks] = useState([]);

// isbn numbers for fetching book data
const isbnList = ["9781484238516", "9781593275662"];

}

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

