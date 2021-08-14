import React from "react";
import { Switch, Route } from "react-router-dom";
import Post from './Components/Post/Post';
import TopicList from './Components/TopicList/TopicList';

export default (
    <Switch>
        <Route component={Post} path="/" />
        <Route component={ TopicList } path="/topics"/>
    </Switch>
)