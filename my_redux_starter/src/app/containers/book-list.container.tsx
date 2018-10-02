import * as React from 'react';
import { connect } from 'react-redux';
import { Book } from '../models/book.model';
import { selectBook, removeBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookListContainer extends React.Component<{books: Book[], selectBook: any, removeBook: any}> {
    
    renderList(){
        if(!!this.props.books)
            return this.props.books.map(
                (book: Book) => {
                    return <li className="collection-item" key={book.title} onClick={(event: any) => this.handleBookSelection(event,book)}>
                    {book.title}</li>
                }
            )
        else 
            return <span>Loading ...</span>
    }
    
    handleBookSelection(event: Event, book: Book) {
        this.props.selectBook(book);
    }

    render() {
        return (
            <ul className="collection">
                {this.renderList()}
            </ul>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        books: state.books
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({selectBook , removeBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
