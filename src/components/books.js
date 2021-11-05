import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Books({books,dispatch}) {
  
  const renderedBooks = books.map(book => (
    <li key={uuidv4()}>
      {book.title} by {book.author}
      <button onClick={()=> dispatch({
        type: "REMOVE_BOOK",
        id: book.id
      })}>delete</button>
    </li>));

  

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {renderedBooks}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { books: state.books }
}

export default connect(mapStateToProps)(Books);