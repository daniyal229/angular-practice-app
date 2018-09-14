import * as React from 'react';
import { connect } from 'react-redux';
import { Book } from '../models/book.model';

class BookDetailContainer extends React.Component<{book?: Book}> {
    render(){
        if(!!this.props.book)
            return (
                <span><h3 className="animated slideInLeft">{this.props.book.title}</h3></span>
            )
        else 
            return (
                <h3>Please Select A Book </h3>
            )
    }
}

let mapStateToProps = (state: any) => {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetailContainer);