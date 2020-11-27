import { getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import React from 'react';


function BookList(props) {
  var data = props.data
  return (
    <>
      {
        data.loading ? 
        <p>Loading...</p>
        :
        <ul id='book-list'>
        { data.books && data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>
        }) }
        </ul>
      }
    </>
  );
}

export default graphql(getBooksQuery)(BookList);