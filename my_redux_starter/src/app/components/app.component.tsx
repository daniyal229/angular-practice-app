import * as React from 'react';
import BookListContainer from '../containers/book-list.container';
import BookDetailContainer from '../containers/book-detail.container';
import { Book } from '../models/book.model';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="row">
         <div className="col m4">
            <BookListContainer />
         </div>
         <div className="col m8">
            <BookDetailContainer />
         </div>
      </div>
    );
  }
}
