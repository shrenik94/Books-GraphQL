import { getAuthorsQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import React from 'react';


function AddBook(props) {
  var data = props.data
  return (
    <>
      <form id='add-bbok'>
        <div className='field'>
          <label>Book Name:</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>Genre:</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>Author</label>
          <select>
            <option>Select author</option>
            {
              data.loading ? <option disabled>Loading Authors...</option>
              :
              data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
            }
          </select>
        </div>
        <button>+</button>
      </form>
    </>
  );
}

export default graphql(getAuthorsQuery)(AddBook);
