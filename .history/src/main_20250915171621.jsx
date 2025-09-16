
function BookCard() {
    return (
        <div className="book-card">
            <img className="book-image">(props.image)</img>
            <h2 className="book-title">(props.title)</h2>
            <h3 className="book-author">(props.author)</h3>
            <a className="add-button">(linkLabel)</a>
        </div>
    )
}