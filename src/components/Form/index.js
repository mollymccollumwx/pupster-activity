import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password:""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // 1. If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!".
if(this.state.firstName.length<1 || this.state.lastName.length<1){
  alert("Please provide a first and last name")


    // 2. If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, "Choose a more secure password," followed by the full name. E.g. "Choose a more secure password, John Smith!"
  } else if (this.state.password.length<6){
    alert(`Pick a more secure password, ${this.state.firstName} ${this.state.lastName}`)
  } else{
    // 3. Else, throw an alert to greet the user. E.g. "Hello, John Smith!".

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      password:"",
    });
  }

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
                    <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
