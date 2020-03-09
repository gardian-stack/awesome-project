import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
// import YouTubeComp from './component/YouTubeComp/YouTubeComp';
import Main from './container/layout/main';
import Content from './component/newTest/Content';
import BlogPost from './component/blogPost/BlogPost';

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// ReactDOM.render(<StateFullComponent />, document.getElementById('root2'));

ReactDOM.render(<Main />, document.getElementById('root'));
// ReactDOM.render(<Content />, document.getElementById('root1'));
// ReactDOM.render(<BlogPost />, document.getElementById('root2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
