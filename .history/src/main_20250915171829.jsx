// UI for book card component

function BookCard() {
    (props) => {
        const linkLabel = props.inStock ? "Learn more" : "Out of Stock"
        const book-image = 
    }
    return (
        <div className="book-card">
            <img className="book-image">(props.image)</img>
            <h2 className="book-title">(props.title)</h2>
            <h3 className="book-author">(props.author)</h3>
            <a className="info-button">(linkLabel)</a>
        </div>
    )
}