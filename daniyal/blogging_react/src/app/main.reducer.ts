import { combineReducers } from 'redux';
import { PostsReducer } from './features/posts/reducers/posts.reducer';
import { reducer as formReducer } from 'redux-form'

export const MainReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});
