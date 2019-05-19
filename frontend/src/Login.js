import React, { Component } from 'react';


var array1 = ['engin', 'ali'];
var x;

class Login extends Component {

   

    login = (e) => {
        e.preventDefault()
    
        array1.forEach(element => {
            if (e.target.username.value === element) {
                x = true;
            }
            else{
                x=false;
            }
        })

        if (x) {
            console.log("Username Error");

        } else {
            array1.push(this.props.username);
            this.props.setUsername(e.target.username.value)
        }

    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.login}>
                    <label>Kullanıcı Adı:</label><br />
                    <input type="text" id="username" /><br />
                    <button id="send" type="submit">Katıl</button>
                </form>
            </div>
        )
    }
}

export default Login;
