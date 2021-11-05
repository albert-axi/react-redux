export default function authorsReducer(authors = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      if (authors.find(({ authorName }) => authorName.toLowerCase() === action.author.authorName.toLowerCase())) {
        return authors
      }
      return [...authors, action.author];

    case "REMOVE_AUTHOR":
      idx = authors.findIndex(author => author.id === action.id)
      return [...authors.slice(0, idx), ...authors.slice(idx + 1)];

    case "ADD_BOOK":
      if (authors.find(({ authorName }) => authorName.toLowerCase() === action.book.author.toLowerCase())) {
        return authors
      }

      return [...authors, { authorName: action.book.author }]
  ;

    default:
      return authors;
  }
}