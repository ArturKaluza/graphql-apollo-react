import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../querys/querys';

class BookList extends Component {
  
  displyBooks() {
      const data = this.props.data;

      if (data.loading) {
        return ( <div>Loading books...</div>);
      }
        return data.books.map(book => {
            return (
                <li key={book.id}>{book.name}</li>
            )
        })
  }
  
  render() {
    //  console.log(this.props);
    return (
      <div>
        <ul id="book-list">
            { this.displyBooks() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
