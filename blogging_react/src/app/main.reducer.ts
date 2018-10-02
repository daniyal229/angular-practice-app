import { combineReducers } from 'redux';
import { PostsReducer } from './features/posts/reducers/posts.reducer';
import { reducer as FormReducer } from 'redux-form'
import { SelectedPostReducer } from './features/posts/reducers/selected-post.reducer';
import { MarkedPostsReducer } from './features/posts/reducers/marked-posts.reducer';

export const MainReducer = combineReducers({
  posts: PostsReducer,
  form: FormReducer,
  selectedPost: SelectedPostReducer,
  markedPosts: MarkedPostsReducer
});
