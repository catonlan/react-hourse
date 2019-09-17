import React from 'react';
import  './app.less'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// 导入semantic-ui 全局样式
import 'semantic-ui-css/semantic.min.css'
// 导入子组件
import Login from './components/login/Login'
import Layout from './components/layout/Layout'
import NotFount from './components/404/404'




function App() {
  return (
    <Router>
        <Switch>
          <Route  path="/login" component={Login} />
          <Route  path="/layout" component={Layout} />
          <Redirect exact from="/" to="/login"  />
          <Route component={NotFount} />
        </Switch>
    </Router>
  );
}

export default App;
