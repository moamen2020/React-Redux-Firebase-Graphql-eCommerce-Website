import React, { Component } from "react";
import { signInWithGoogle, auth } from "../../firebase/utils";
import "./styles.scss";

import FormInput from "../forms/formInput";
import Button from "../forms/Button";
import AuthWrapper from "../AuthWrapper";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
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

  handelSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err)
    }
  };

  render() {
    const { email, password } = this.state;
    const configAuthWrapper = {
      headline: "Sign In",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handelSubmit}>
            {/*  ======= */}

            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />

            <Button type="submit">Sign In</Button>

            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
            </div>

            <div className="links">
              <Link to="/recovery">Reset Password</Link>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignIn;
