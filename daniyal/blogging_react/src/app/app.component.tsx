import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreatePostComponent } from './features/posts/components/create-post.component';
import { PostComponent } from './features/posts/components/post.component';
import PostsContainer from './features/posts/containers/posts.container';

export default class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <Switch>
              <Route path="/posts/new" component={CreatePostComponent} />
              <Route path="/posts/:id" component={PostComponent} />
              <Route path="/" component={PostsContainer} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
