import { useRef } from "react"
import { connect, useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const BookForm = () => {

  const titleRef = useRef()
  const authorRef = useRef()
  const authors = useSelector(state => state.authors)
  const books = useSelector(state => state.books)

  const dispatch = useDispatch()


  const addBook = () => {
    dispatch({
      type: "ADD_BOOK",
      book: {
        id: uuidv4(),
        title: titleRef.current.value,
        author: authorRef.current.value
      }
    })

    // if (authorRef.current.value) {
    //   addAuthor()
    // }
  }

  // const addAuthor = () => dispatch({
  //   type: "ADD_AUTHOR",
  //   author: {
  //     authorName: authorRef.current.value
  //   }
  // })

  return (
    <div>
      
      <input id="title" ref={titleRef} type="text" placeholder="Book Title"></input><br />
      <input id="author" ref = {authorRef} type="text" placeholder="Author Name"></input><br/>
      <button onClick={addBook} >Add Book</button>
    </div>

  
  )
}

//Only used in conjunction with connect()

// adds an authors and books prop to the component's props object
const mapStateToProps = state => ({
  authors: state.authors,
  books: state.books
})

// adds an addBook prop to the component's props object
const mapDispatchToProps = dispatch => ({
  // a function that calls redux dispatch that dispatches and action to add a new book
  addBook: (book) => dispatch({
    type: "ADD_BOOK",
    book
  })
})


// connect components to redux
// export default connect(null)(BookForm) // adds dispatch to component's props 
// export default connect(mapStateToProps, mapDispatchToProps)(BookForm) // adds access to redux state and dispatch 

export default BookForm