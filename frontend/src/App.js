import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import MessagingPanel from './MessagingPanel';



class App extends Component {
  state = {
    username: null
  }

  setUsername = (username) => {
    //array1.forEach(element => {
      //if (this.props.username.value === element) { console.log("deneme") }})
    this.setState({ username })
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.username ?
          <Login setUsername={this.setUsername} />
          :
          <MessagingPanel username={this.state.username}/>
        }

        
      </div>
    );
  }
}

export default App;








/*- uygulama
  - giris
  - mesaj panel 
  - mesaj kutu
  - mesaj goster
  */
    