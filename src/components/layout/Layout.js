import React from 'react'
import './layout.css'
import { Grid, Icon } from 'semantic-ui-react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="main-content">

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