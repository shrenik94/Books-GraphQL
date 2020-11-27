import { getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import BookDetails from './BookDetails'
import React, { useState } from 'react';


const BookList = props => {
  const [selected, setSelected] = useState(null)
  var data = props.data
  return (
    <>
      {
        data.loading ? 
        <p>Loading...</p>
        :
        <ul id='book-list'>
        { data.books && data.books.map((book) => {
          return <li onClick={e => {setSelected(book.id)}} key={book.id}>{book.name}</li>
        }) }
        </ul>
      }
      <BookDetails bookId={selected} />
    </>
  );
}

export default graphql(getBooksQuery)(BookList);