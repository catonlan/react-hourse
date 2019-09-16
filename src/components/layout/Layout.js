import React from 'react'
import './Layout.css'
import { Grid, Icon } from 'semantic-ui-react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'

import Home from '../home/Home'
import Info from '../info/Info'
import Chat from '../chat/Chat'
import Mine from '../mine/Mine'
import NotFount from '../404/404'
class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="main-content">
                    <Switch>
                        <Route path="/layout/home" Component={Home} />
                        <Route path="/layout/info" Component={Info} />
                        <Route path="/layout/chat" Component={Chat} />
                        <Route path="/layout/mine" Component={Mine} />
                        <Redirect exact path="/layout/" to="/layout/home" />
                        <Route component={NotFount} />
                    </Switch>
                </div>
                <div className="main-menu">
                    <Grid centered>
                        <Grid.Row centered columns={4}>
                            <Grid.Column>
                                <Link to="/layout/home">首页</Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to="/layout/info">资讯</Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to="/layout/chat">微聊</Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to="/layout/mine">我的</Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}



export default Layout;