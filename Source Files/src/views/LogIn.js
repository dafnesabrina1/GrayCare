import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAMq5lOFETwF5YffROJZGJS5VfVhGyT3ZQ",
    authDomain: "testing-d6738.firebaseapp.com",
    databaseURL: "https://testing-d6738.firebaseio.com",
    projectId: "testing-d6738",
    storageBucket: "",
    messagingSenderId: "835270334630",
    appId: "1:835270334630:web:b474f6b91d01cd7ae57c67"
  };
  firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      password: "",
      inputUser:'', 
      inputPass:''
    };
  }
  componentDidMount() {
    const nameRef = firebase.database().ref();
    nameRef.on('value', snapshot => {
        this.setState({
          inputUser: snapshot.val().nombre,
          inputPass: snapshot.val().password
        })
      })
  }

  validateForm() {
    return this.state.nombre.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const { history } = this.props;
    if(this.state.password === this.state.inputPass && this.state.inputUser === this.state.nombre){ 
        history.push('/blog-overview');
    }else{
        console.log(this.state.inputPass);
        alert("Contraseña erronea");
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="nombre" bsSize="large">
            <div>Name</div>
            <FormControl
              autoFocus
              type="name"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <div>Password</div>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}