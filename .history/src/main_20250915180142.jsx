import React, {useEffect, useState} from 'react';
import BookCard from './components/BookCard';
import './main.css';

function App() {

const [books, setBooks] = useState([]);

// isbn numbers for fetching book data
const isbnList = ["9781484238516", "9781593275662"];

// fetch book data from itbook store api
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

    return (
        <div className='app'>
            <header className="header">
                <h1>Book Catalog</h1>
            </header>

            <main className="content">
                
        </div>
    );

}

