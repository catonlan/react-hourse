import  React  from 'react'

import  './Login.css'
import {Form, FormButton} from 'semantic-ui-react'
import { log } from 'util';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uname: '',
            pwd: ''
        }
    }

    login = async () =>{
        // console.log('1111',this.state, this.axios);
      const res = await this.axios.post('users/login', this.state)
    //   console.log(res.data);
      if (res.data.meta.status === 200) {
          //保存 uid 和 token 到本地
          localStorage.setItem('uid', res.data.data.uid)
          localStorage.setItem('token', res.data.data.token)

          // 登录成功跳转到布局页面
          this.props.history.push('/layout')
      }else {
          alert(res.data.meta.msg)
      }
    }

    change = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        
            const {uname, pwd} = this.state;
        return (

            <div className="login-container">
                <div className="login-title">登录</div>
                <div className="login-form">
                    <Form onSubmit={this.login}>
                        <Form.Field>
                            <Form.Input icon="user" iconPosition="left"  placeholder="请输入用户名"
                            name='uname'
                            required
                             value={uname}
                             onChange={this.change}
                              />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input icon="lock" iconPosition="left"   placeholder="请输入密码" 
                            name='pwd'
                            type='password'
                            value={pwd} 
                            required
                            onChange={this.change}    
                            />
                        </Form.Field>
                        <FormButton>登录</FormButton>
                    </Form>
                </div>
            </div>
        )

    }

}



export default Login;