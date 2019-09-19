import React from 'react'
import {Dimmer, Loader, Input, Grid, Icon} from 'semantic-ui-react'
import "./home.css"
// 导入轮播图样式
import 'react-image-gallery/styles/css/image-gallery.css'
// 导入轮播图组件第三方包
import ImageGallery from 'react-image-gallery'
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            swipes: [], // 轮播图
            menus: [], // 菜单
            infos: [], //资讯
            faqs: [], // 问答
            houses: [], //房屋列表
            isLoading: true  //正在加载中
        }
    }

    async componentWillMount(){
        const results = await Promise.all([
            this.axios.post('homes/swipe'),
            this.axios.post('homes/menu'),
            this.axios.post('homes/info'),
            this.axios.post('homes/faq'),
            this.axios.post('homes/house')
        ])

        // 数据加载完毕
        this.setState({
            swipes: results[0].data.data.list,
            menus: results[1].data.data.list,
            infos: results[2].data.data.list,
            faqs: results[3].data.data.list,
            houses: results[4].data.data.list,
            isLoading: false
        })
    }
    // 渲染菜单
    renderMenus = menus => {
        return (
            <Grid padded>
                {/* 每一行最多显示4列, 装不下自动换一行 */}
                <Grid.Row columns={4}>
                    {menus.map(item => {
                        return (
                            <Grid.Column
                            // onClick={() => {
                                // this.clickMenu(item.id, item.menu_name)
                            // }}
                            key={item.id}>
                                <div className="home-menu-item">
                                    <Icon name="home" size="big"/>
                                </div>
                                <div style={{marginTop: 5}}>{item.menu_name}</div>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        // 对 state 中的数据进行结构赋值
        const {isLoading, swipes, menus} = this.state
        return (
            <div className="home-cnotainer">
                {/* 加载视图 */}
                <Dimmer active={isLoading} inverted>
                    <Loader inverted>正在加载中.....</Loader>
                </Dimmer>
                {/* 头部  搜索*/}
                <div className="home-topbar">
                    <Input fluid 
                    icon={{name:'search', circular:true, link: true}}
                    placeholder="搜房源..." />
                </div>
                <ImageGallery 
                    autoPlay
                    showBullets
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    items={swipes}
                />

                {/* 菜单 */}
                {this.renderMenus(menus)}
            </div>
        )
    }
}

export default Home;