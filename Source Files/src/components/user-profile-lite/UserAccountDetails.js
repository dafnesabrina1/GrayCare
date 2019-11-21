import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

class UserAccountDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        firstName: "Sandra",
        lastName: "Alcaraz",
        email: "sandra@gmail.com",
        password: "h",
        address: "1234 Main St.",
        city: "",
        state: "",
        zip: ""
    }
    this.submit = this.submit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    
  }
  componentDidMount(){
    fetch("https://testing-graycare.herokuapp.com/getProfile").then(res => res.json()
    ).then((data)=> {
      const fun = this.state;
      this.setState({firstName: data.firstName})
      this.setState({password: data.password})
      this.setState({email: data.email})
      this.setState({lastName: data.lastName})
      this.setState({address: data.address})
      this.setState({city: data.city})
      this.setState({state: data.state})
      this.setState({zip: data.zip})
      
    });
  }

  submit(){
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    console.log(data)
    fetch("https://testing-graycare.herokuapp.com/updateProfile",
        {
          method: 'POST',
          body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
  handleChangeFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleChangeLastName(event) {
    this.setState({lastName: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  handleChangeCity(event) {
    this.setState({city: event.target.value});
  }
  handleChangeState(event) {
    this.setState({state: event.target.value});
  }
  handleChangeZip(event) {
    this.setState({zip: event.target.value});
  }

render(){
  return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 data-testid="uad-title" className="m-0">{this.props.title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChangeFirstName}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChangeLastName}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleChangeAddress}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="city"
                    placeholder="City"
                    value= {this.state.city}
                    onChange={this.handleChangeCity}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="state"
                    placeholder="State"
                    value={this.state.state}
                    onChange={this.handleChangeState}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="zip"
                    placeholder="Zip"
                    value= {this.state.zip}
                    onChange={this.handleChangeZip}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
              </Row>
              <Button theme="accent" onClick = {this.submit}>Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  )
  }
}


UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
