import * as React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { CreatePostContainer } from './features/posts/containers/create-post.container';
import  PostContainer  from './features/posts/containers/post.container';
import PostsContainer from './features/posts/containers/posts.container';

export default class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route path="/posts/new" component={CreatePostContainer} />
              <Route path="/posts/:id" component={PostContainer} />
              <Route path="/" component={PostsContainer} onEnter={() => {
                
              }} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
