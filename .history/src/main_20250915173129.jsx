import React, {useEffect, useState} from 'react';
import BookCard

// UI for book card component



function BookCard() {
    const linkLabel = props.learnMore;
    const image = props.image;
    const title = props.title;
    const author = props.author;


    return (
        <div className="book-card">
            <img className="book-image">(props.image)</img>
            <h2 className="book-title">(props.title)</h2>
            <h3 className="book-author">(props.author)</h3>
            <a className="info-button">(linkLabel)</a>
        </div>
    )
}