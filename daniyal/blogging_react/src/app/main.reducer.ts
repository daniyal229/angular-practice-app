import { combineReducers } from 'redux';
import { PostsReducer } from './features/posts/reducers/posts.reducer';
import { reducer as formReducer } from 'redux-form'
import { SelectedPostReducer } from './features/posts/reducers/selected-post.reducer';

export const MainReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  selectedPost: SelectedPostReducer
});
