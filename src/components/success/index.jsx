import React, { Component } from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';

export default class Success extends Component {
  componentWillMount() {
    if (localStorage.getItem('success') !== 'show') {
      window.location.assign('/')
    }
  }
  render() {
    return (
      <div>
        <Navbar classPass="xnav inherit-pos" />
        <section style={{ marginBottom: '0' }} className="container-full-faq">
          <div className="wid-6">
            <h1 className="h1-large text-color-pri mar-bottom-1 mar-t-0 text-center">Congrats, you’re in!</h1>
            <div className="wid-8">
              <p className="testimonials-text">Your 30-day free trial has started and you’ll be receiving a welcome email shortly.</p>
              <p className="testimonials-text">If you don’t see an email from us, please make sure to check your spam, junk, or “promotional” tab.</p>
              <p className="testimonials-text">Please make sure to add our email hello@travelabunch.com to your contact list so you never miss out on any emails.</p>
              <p className="testimonials-text">Happy travels! <span aria-label="Love" role="img">❤️</span></p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
