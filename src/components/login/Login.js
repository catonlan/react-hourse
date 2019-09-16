import  React  from 'react'

import  './Login.css'
import {Form, FormButton} from 'semantic-ui-react'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uname: '',
            pwd: ''
        }
    }
    login = () =>{
        console.log('1111',this.state);
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
                             value={uname}
                             onChange={this.change}
                              />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input icon="lock" iconPosition="left"   placeholder="请输入密码" 
                            name='pwd'
                            type='password'
                            value={pwd} 
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