import React from 'react'
import './layout.css'
import { Grid, Icon} from 'semantic-ui-react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'

import Home from '../home/Home'
import Info from '../info/Info'
import Chat from '../chat/Chat'
import Mine from '../mine/Mine'
import NotFount from '../404/404'

//自定义 link
function TabBarLink ({name, icon, to}) {
    return <Route 
        path={to}
        children={({match}) => (
            <Link to={to}>
                <div className={match ? "placeholder active" : "placeholder"}>
                    <Icon name={icon} />
                    <div>{name}</div>
                </div>
            </Link>
        )}
    />
}

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="main-content">
                
                    <Switch>
                        <Route  path="/layout/home" Component={Home} />
                        <Route  path="/layout/info" Component={Info} />
                        <Route  path="/layout/chat" Component={Chat} />
                        <Route  path="/layout/mine" Component={Mine} />
                        <Redirect exact path="/layout/" to="/layout/home" />
                        <Route component={NotFount} />
                    </Switch>
                </div>
                <div className="main-menu">
                    <Grid padded>
                        <Grid.Row centered columns={4}>
                            <Grid.Column>
                                <TabBarLink name="首页" icon="user secret" to="/layout/home" />
                            </Grid.Column>
                            <Grid.Column>
                                <TabBarLink name="资讯" icon="window restore" to="/layout/info" />
                            </Grid.Column>
                            <Grid.Column>
                                <TabBarLink name="微聊" icon="microchip" to="/layout/chat" />
                            </Grid.Column>
                            <Grid.Column>
                                <TabBarLink name="我的" icon="window maximize" to="/layout/mine" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}



export default Layout;