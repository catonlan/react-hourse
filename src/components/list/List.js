import React, { Component } from 'react'
import './list.css'

import { Icon, Item, Dimmer, Loader } from 'semantic-ui-react'



class List extends Component {
    constructor(props) {
        super()

        // const query = new URLSearchParams(props.location.search)

        // this.state = {
        //     house_type:query.get('house_type'),
        //     name:query.get('name')
        // }

        this.state = {
            house_type: props.match.params.house_type,
            name: props.match.params.name,
            houses: [],
            isLoading: true // 正在加载中
        }
    }

    async componentWillMount() {
        const res = await this.axios.post('homes/list', {
            home_type: this.state.house_type
            
        })

        this.setState({
            houses: res.data.data,
            isLoading: false
        })
        console.log(res)
    }

    render() {
        return (
            <div className="house-list">
                <Dimmer inverted active={this.state.isLoading}>
                    <Loader>加载中...</Loader>
                </Dimmer>
                <div className="house-list-title">
                    <Icon
                        onClick={() => {
                            this.props.history.goBack()
                        }}
                        name="angle left"
                        size="large"
                    />
                    <span>{this.state.name}</span>
                </div>
                <Item.Group unstackable>
                    {this.state.houses.map(item => {
                        return (
                            <Item key={item.id}>
                                <Item.Image
                                    size="tiny"
                                    src="http://47.96.21.88:8086/public/home.png"
                                />

                                <Item.Content>
                                    <Item.Header as="a">{item.home_name}</Item.Header>
                                    <Item.Description>{item.home_desc}</Item.Description>
                                    <Item.Description>{item.home_tags}</Item.Description>
                                    <Item.Description>{item.home_price}</Item.Description>
                                </Item.Content>
                            </Item>
                        )
                    })}
                </Item.Group>
            </div>
        )
    }
}



export default List;