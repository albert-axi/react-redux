export default function booksReducer(books = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...books, action.book];

    case "REMOVE_BOOK":
      // idx = books.findIndex(book => book.id  === action.id) // 5
      // return [...books.slice(0, idx), ...books.slice(idx + 1)]
      return books.filter(book => book.id !== action.id)

    default:
      return books;
  }
}
