import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Authors({authors}) {
  
  const renderedAuthors = authors.map(author => <li key={uuidv4()}>{author.authorName}</li>)

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {renderedAuthors}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { authors: state.authors }
}

export default connect(mapStateToProps)(Authors);