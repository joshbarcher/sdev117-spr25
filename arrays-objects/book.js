const book = {
    title: "Red Rising",
    author: {
        fName: "Pierce",
        lName: "Brown",
        fullName: function() {
            return this.fName + " " + this.lName;
        }
    },
    pages: 500,
    synopsis: "A hero rises from the depths of Mars...",
    format: "Hardcover",
    genres: ["Science Fiction", "Action", "Thriller"],
    "is Favorite": true
}

console.log(`${book.title} by ${book.author.fullName()}`);
console.log('-------------------------------');
console.log(`Pages: ${book.pages}`);
console.log(`Format: ${book.format}`);
console.log(`Genres: ${book.genres.length}`);
console.log(book["is Favorite"]);
console.log(book["pages"]);
console.log(book["title"]);
console.log('-------------------------------');