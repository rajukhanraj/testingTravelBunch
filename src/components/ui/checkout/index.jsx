import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../../config';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Button } from 'antd';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      inComplete: true,
      loading: false
    }
    this.submit = this.submit.bind(this);
  }
  async submit(ev) {
    this.setState({ loading: true })
    let { token } = await this.props.stripe.createToken({});
    console.log(token)
    if (token) {
      axios.post(`${apiUrl}/api/users/signup`, { token: token.id, email: localStorage.getItem('email'), fromCity: localStorage.getItem('fromCity') })
        .then((res) => {
          console.log(res)
          localStorage.setItem('success', 'show')
          window.location.assign(`/success`)
          this.setState({ complete: true, loading: false })
          console.log("Successful Purchase")
        })
        .catch((e) => {
          console.log(e)
          this.setState({ inComplete: false })
        })
    }
  }
  render() {
    return (
      <div className="checkout">
        {this.state.inComplete === false ? <h1 className="text-center">Card failed, try again.</h1> : null}
        <CardElement />
        <div className="flex-center">
          <Button loading={this.state.loading} className="btn-stripe" onClick={this.submit}>START FREE TRIAL</Button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);