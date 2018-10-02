import { Book } from "../models/book.model";

export var BooksReducer = (state: any, action: any): Book[] => {
    let books: Book[] = [
        { title: 'Javacript' },
        { title: 'Python' },
        { title: 'Lord Of the Rings' },
        { title: 'Harry Potter' },
    ]
    switch (action.type) {
        case 'BOOK_REMOVED':
            let index: number = books.indexOf(action.payload)
            books.splice(index,1)
            return books;
    
        default:
            return books;
    }
    
}