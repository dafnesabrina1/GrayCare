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
      data: {
        firstName: "Sandra",
        lastName: "Alcaraz",
        email: "sandra@gmail.com",
        password: "sandra",
        address: "1234 Main St.",
        city: "",
        state: "",
        zip: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(event){    
    const name = event.target.id;
    const newdata = this.state.data;
    this.setState({
      data : {
        newdata,
        [name]: event.target.value,
      }
    })
  }

render(){
  return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{this.props.title}</h6>
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
                    value={this.state.data.firstName}
                    onChange={this.handleChange}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="lastName"
                    placeholder="Last Name"
                    value={this.state.data.lastName}
                    onChange={this.handleChange}
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
                    value={this.state.data.email}
                    onChange={this.handleChange}
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
                    value={this.state.data.password}
                    onChange={this.handleChange}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="address"
                  placeholder="Address"
                  value={this.state.data.address}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="city"
                    placeholder="City"
                    value= {this.state.data.city}
                    onChange={this.handleChange}
                  />
                </Col>
                {/* State */}
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormInput
                    id="state"
                    placeholder="State"
                    value={this.state.data.state}
                    onChange={this.handleChange}
                  />
                </Col>
                {/* Zip Code */}
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="zip"
                    placeholder="Zip"
                    value= {this.state.data.zip}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
              </Row>
              <Button theme="accent">Update Account</Button>
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
