import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Posts from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts}>

        </IndexRoute>
        <Route path="posts/new" component={PostsNew}></Route>
    </Route>
);