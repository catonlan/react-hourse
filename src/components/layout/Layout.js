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
                                <Link to="/">首页</Link>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}



export default Layout;