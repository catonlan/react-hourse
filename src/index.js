import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 导入 axios 让它成为 webpack 的依赖
import './axios/index'
import {Provider} from 'react-redux'
import store from './store'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
