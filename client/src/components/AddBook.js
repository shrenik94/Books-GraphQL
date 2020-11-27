import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import React, { useState } from 'react';

const AddBook = props => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const data  = props.getAuthorsQuery

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBookMutation({
      variables: { 
        name: name, 
        genre: genre, 
        authorId: authorId 
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  }

  return (
    <>
      <form id='add-book' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Book Name:</label>
          <input 
            type='text' 
            onChange={(e) => {
              setName(e.target.value);
            }} 
          />
        </div>
        <div className='field'>
          <label>Genre:</label>
          <input 
            type='text' 
            onChange={(e) => {
              setGenre(e.target.value);
            }} 
          />
        </div>
        <div className='field'>
          <label>Author</label>
          <select
            onChange={(e) => {
              setAuthorId(e.target.value);
            }} 
          >
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

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);
