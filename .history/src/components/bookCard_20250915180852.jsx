import React from "react";

// UI for book card component

function BookCard({ image, title, authors, learnMore }) {
    return (
        <div className="book-card">
            <img src={image} className="book-image"/>
            <h2>{title}</h2>
            <h3 className="book-author">{(props.author)}</h3>
            <a className="info-button">(linkLabel)</a>
        </div>
    )
}