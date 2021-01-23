import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/utils";
import Button from "../forms/Button";
import "./styles.scss";

class SignIn extends Component {
  handelSubmit = async (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="signin">
        <div className="wrap">
          <h2>LogIn</h2>
          <div className="formWrap">
            <form onSubmit={this.handelSubmit}>
              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
