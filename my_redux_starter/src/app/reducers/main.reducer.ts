import { combineReducers } from 'redux';
import { BooksReducer } from './books.reducer';
import { ActiveBookReducer } from './active_book.reducer';

export const MainReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});
