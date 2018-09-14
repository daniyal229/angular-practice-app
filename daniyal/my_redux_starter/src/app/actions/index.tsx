import { Book } from "../models/book.model";

export function selectBook(book: Book) {
    console.log(book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function removeBook(book: Book) {
    return {
        type: 'BOOK_REMOVED',
        payload: book
    }
}