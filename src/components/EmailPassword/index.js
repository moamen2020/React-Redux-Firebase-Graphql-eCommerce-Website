import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import AuthWrapper from "../AuthWrapper";
import Button from "../forms/Button";
import FormInput from "../forms/formInput";

import { auth } from "../../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3000/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found, Please try again."];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    const { email, errors } = this.state;
    const cofigAuthWrapper = {
      headline: "Email Password",
    };
    return (
      <div>
        <AuthWrapper {...cofigAuthWrapper}>
          <div className="formWrap">
            {errors.length > 0 && (
              <ul>
                {errors.map((e, index) => {
                  return <li ket={index}>{e}</li>;
                })}
              </ul>
            )}
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />

              <Button>Email Password</Button>
            </form>
          </div>
        </AuthWrapper>
      </div>
    );
  }
}

export default withRouter(EmailPassword);
