import React, { Component, Fragment } from 'react';
import { Button, Rate, Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import Signup from '../ui/authmodals/signup';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: false,
      show2: false,
      authenticated: JSON.parse(localStorage.getItem('authenticated'))
    }
    this.onShow = this.onShow.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onShow1 = this.onShow1.bind(this);
    this.onClose1 = this.onClose1.bind(this);
    this.onShow2 = this.onShow2.bind(this);
    this.onClose2 = this.onClose2.bind(this);
    this.onCloseToForgot = this.onCloseToForgot.bind(this);
    this.onCloseToSignup = this.onCloseToSignup.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  onShow() {
    this.setState({ show: true })
    document.body.className = 'modal--active';
  }
  onClose() {
    this.setState({ show: false })
    document.body.className = '';
  }
  onCloseToForgot() {
    this.setState({ show: false, show2: true })
    document.body.className = 'modal--active';
  }
  onCloseToSignup() {
    this.setState({ show: false, show1: true })
    document.body.className = 'modal--active';
  }
  onShow1() {
    window.scrollTo(0, 0)
    setTimeout(() => {
      this.setState({ show1: true })
      document.body.className = 'modal--active';
    }, 1000);
  }
  onClose1() {
    this.setState({ show1: false })
    document.body.className = '';
  }
  onShow2() {
    this.setState({ show2: false });
    document.body.className = 'modal--active';
  }
  onClose2() {
    this.setState({ show2: false })
    document.body.className = '';
  }
  login() {
    this.setState({ authenticated: true })
    localStorage.setItem('authenticated', 'true')
  }
  logout() {
    this.setState({ authenticated: false })
    localStorage.clear()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Travel A Bunch | Cheap Flight Deals to Dream Destinations</title>
          <meta name="description" content="The deals I’m getting from Travel A Bunch are incredible. My partner and I will travel so much more because of the savings." />
        </Helmet>
        <Navbar classPass={this.state.authenticated ? 'greatest-index-1 xnav' : 'xnav'} authenticated={this.state.authenticated} onToggleShow={this.onShow} logout={this.logout} />
        <Fragment>
          <section className="container-align">
            {this.state.show1 ? <Signup onClose={this.onClose1} /> : null}
            <div className="form-wrapper-left">
              <div className="illustration">
                <img src="../images/02.png" alt="Illusration" />
              </div>
            </div>
            <div className="form-wrapper">
              <div className="flex-wrapper">
                <div className="full-width pad-sep-3">
                  <div className="mar-sep-3">
                    <h1 className="works-left h1-large text-color-pri mar-bottom-1">Save $1000’s on flights to dream destinations</h1>
                    <p className="works-left p-large">We find the cheapest flight deals from your home airport and send it directly to your inbox.</p>
                    <div className="flex-btn">
                      <a style={{ fontWeight: '600' }} className="ant-btn ant-btn-lg mar-03 btn-recolor-nav" href="#about">
                        LEARN MORE</a>
                      <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri">TRY IT FREE!</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section className="container-align-mobile">
            {this.state.show1 ? <Signup onClose={this.onClose1} /> : null}
            <div className="flex-wrapper">
              <div style={{ maxWidth: '601px' }} className="pad-sep-3">
                <div className="mar-sep-3-1">
                  <h1 className="text-center h1-large text-color-pri mar-bottom-1">Save $1000’s on flights to dream destinations</h1>
                  <p className="text-center p-large">We find the cheapest flight deals from your home airport and send it directly to your inbox.</p>
                  <div className="full-width">
                    <div className="flex-center">
                      <a style={{ fontWeight: '600' }} className="ant-btn ant-btn-lg mar-03 btn-recolor-nav" href="#about">
                        LEARN MORE</a>
                      <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri">TRY IT FREE!</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-about landing-shadow" id="about">
            <h1 className="text-center h1-large text-color-pri mar-bottom-1">Here's How It Works</h1>
            {/* <div className="welcome-bubble">
              <div className="illustration-re">
                <img src="../images/B1.png" alt="" />
              </div>
              <div>
                <h3 className="text-color-pri text-center h1-large-3 m-bottom-none pd-1 roboto full-weight works-left">1. Cheap deals</h3>
                <p className="works-left">Choose your home airport and we will search daily for the cheapest flight deals to dream destinations around the world.</p>
              </div>
            </div>
            <div className="welcome-bubble reverse">
              <div>
                <h3 className="text-color-pri text-center h1-large-3 m-bottom-none pd-1 roboto full-weight works-left">2. Book directly</h3>
                <p className="works-left">Once we find amazing flight deals, we will quickly email them to you with all the info needed to book the ticket directly with the airline.</p>
              </div>
              <div className="illustration-re">
                <img src="../images/B2.png" alt="" />
              </div>
            </div>
            <div className="welcome-bubble">
              <div className="illustration-re">
                <img src="../images/B3.png" alt="" />
              </div>
              <div>
                <h3 className="text-color-pri text-center h1-large-3 m-bottom-none pd-1 roboto full-weight works-left">3. Vacation time</h3>
                <p className="works-left">Book your favorite deal, save money, and enjoy your dream vacation!</p>
              </div>
            </div> */}
            <div style={{ width: '90%' }}>
              <Row>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <div>
                    <img style={{ width: '100%', height: '100%' }} src="../images/png.png" alt="" />
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                  <div className="pd-7">
                    <div style={{ marginTop: '2rem' }} className="flex">
                      <div>
                        <img src="../images/passport.png" alt="" />
                      </div>
                      <div>
                        <h2 className="works-left heavy">Sign Up</h2>
                        <p className="works-left">Get your free portfolio recommendation and open your account in minutes.</p>
                      </div>
                    </div>
                    <div style={{ marginTop: '2rem' }} className="flex">
                      <div>
                        <img src="../images/sun-umbrella.png" alt="" />
                      </div>
                      <div>
                        <h2 className="works-left heavy">Fund</h2>
                        <p className="works-left">Fund your account with a few clicks. We will invest for you based on your risk profile.</p>
                      </div>
                    </div>
                    <div style={{ marginTop: '2rem' }} className="flex">
                      <div>
                        <img src="../images/www.png" alt="" />
                      </div>
                      <div>
                        <h2 className="works-left heavy">Monitor</h2>
                        <p className="works-left">Monitor performance and view your holdings at any time.</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="flex-center margin-top-4">
              <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri btn-extra-large">TRY FOR FREE</Button>
            </div>
          </section>
          <section className="pd">
            <div className="flex-wrapper">
              <div>
                <h1 className="text-center h1-large text-color-pri">Deals Our Members Received</h1>
              </div>
              <div className="example-table1">
                <div className="example-table__cell1">
                  <img className="full-width full-height" src="../images/image.jpg" alt="" />
                </div>
                <div className="example-table__cell1">
                  <img className="full-width full-height" src="../images/image 2.jpg" alt="" />
                </div>
                <div className="example-table__cell1">
                  <img className="full-width full-height" src="../images/image 3.jpg" alt="" />
                </div>

              </div>
              <div className="flex-center margin-top-4">
                <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri btn-extra-large">GET THE DEALS</Button>
              </div>
            </div>

          </section>
          <section className="pd landing-shadow">
            <div className="flex-wrapper">
              <div>
                <h1 className="text-center h1-large text-color-pri">Why Members Love Us</h1>
                <div>
                  <p style={{ fontSize: '1.5rem', marginBottom: '0' }} className="text-center">Avg. 5 stars (246+ reviews)</p>
                  <Rate style={{ marginBottom: '1rem' }} className="flex-btn" disabled defaultValue={5} />
                </div>
              </div>
              <div className="example-table">
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Sumeya</p>
                    <img className="img-circle" src="../images/sumeya.jpeg" alt="" />
                  </div>
                  <p className="m-bottom-none">Crazy! I just booked a roundtrip deal to Paris for $266!! I'm so excited for this solo trip and happy I snatched this deal before it disappeared.</p>
                  <Rate disabled defaultValue={5} />
                </div>
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Misa</p>
                    <img className="img-circle" src="../images/5.jpg" alt="" />
                  </div>
                  <p className="m-bottom-none">I’m always looking for my next adventure and Travel A Bunch is the perfect service for my future travel plans!</p>
                  <Rate disabled defaultValue={5} />
                </div>
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Didi</p>
                    <img className="img-circle" src="../images/rdidi.jpeg" alt="" />
                  </div>
                  <p className="m-bottom-none">I just booked a deal for my family of 4 to Spain and paid $324 per ticket! We saved a TON of money and look forward to our trip.</p>
                  <Rate disabled defaultValue={5} />
                </div>
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Dennis</p>
                    <img className="img-circle" src="../images/4.jpg" alt="" />
                  </div>
                  <p className="m-bottom-none">I enjoy seeing the flight deals and thinking of all the possibilities. Amazing service, I look forward to booking a deal soon.</p>
                  <Rate disabled defaultValue={5} />
                </div>
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Ayan</p>
                    <img className="img-circle" src="../images/2.jpg" alt="" />
                  </div>
                  <p className="m-bottom-none">The deals I’m getting from Travel A Bunch are incredible. My partner and I will travel so much more because of the savings.</p>
                  <Rate disabled defaultValue={5} />
                </div>
                <div className="example-table__cell">
                  <div className="realign-img-t">
                    <p className="p-deals">Hidaya</p>
                    <img className="img-circle" src="../images/6.jpeg" alt="" />
                  </div>
                  <p className="m-bottom-none">I love the ease of being sent great deals and saving time instead of searching for them myself. I recommend TAB to everyone!</p>
                  <Rate disabled defaultValue={5} />
                </div>
              </div>
            </div>
          </section>
          {/* <section className="pd">
            <div className="flex-wrapper">
              <div className="half-width left-auto">
                <div className="full-width">
                  <h1 className="text-right h1-large text-color-pri works-text-left">Made by Travel Junkies</h1>
                </div>
              </div>
              <Row className="display-align">
                <Col md={12} sm={24}>
                  <img className="full-width image-full mb-1-res" src="../images/IMG_0940.jpg" alt="Mariam" />
                </Col>
                <Col md={12} sm={24}>
                  <div className="testimonials">
                    <p className="testimonials-text">
                      I've been traveling around the world for years and it’s all due to finding the most amazing flight deals.
                          </p>
                    <p className="testimonials-text">
                      For example, I flew to Iceland for $279, Spain for $325, Kenya for $551, and more — creating some of the most incredible memories!
                          </p>
                    <p className="testimonials-text">Sometimes flights have an instant price drop or there’s a mistake fare, but they disappear quickly.</p>
                    <p className="testimonials-text">That's why my brother and I built TAB so you can take advantage of the deals and save time.</p>
                    <p className="testimonials-text">
                      Our goal is to help you fulfill your travel dreams, make friends, create lifetime memories, and come home refreshed
                          </p>
                    <p className="testimonials-text">
                      Happy travels,
                          </p>
                    <div>
                      <img style={{ width: '250px' }} src="../images/001.png" alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="flex-center margin-top-4">
                <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri btn-extra-large">SIGN ME UP</Button>
              </div>
            </div>
          </section> */}
          <section className="pd" style={{ backgroundColor: 'white' }}>
            <div className="flex-wrapper">
              <div>
                <h1 className="text-center h1-large text-color-pri">Made by Travel Junkies</h1>
              </div>
              <div className="not-full">
                <Row className="display-align">
                  <Col className="col-adjust" md={10} sm={24}>
                    <img className="full-width image-full mb-1-res border-image" src="../images/giraffe.png" alt="Mariam" />
                  </Col>
                  <Col style={{ backgroundColor: 'white' }} className="back-shadow padding-1-imp bord-rad col-adjust" md={14} sm={24}>
                    <div className="full-width pad-1-sec">
                      <h1 style={{ fontSize: '1.6rem', color: 'rgba(0, 0, 0, 0.65)' }} className="text-right work-align-text">Hi, I'm Mariam.</h1>
                      <div className="testimonials">
                        <p className="p-large">
                          I've booked the craziest flight deals for the past 5+ years, had adventures in 24 countries, and saved thousands of dollars.
                        </p>
                        <p className="p-large">
                          For example, I flew ROUNDTRIP to Iceland for $279, Spain for $325, Kenya for $551 (look at the picture!), and more — creating some of the most incredible memories!
                        </p>
                        <p className="p-large">Sometimes airlines have a deep discounted sale or a mistake fare, but they disappear quickly.</p>
                        <p className="p-large">That's why my brother and I built Travel A Bunch so we can help you take advantage of the deals and save time.</p>
                        <p className="p-large">
                          Our goal is to help you fulfill your travel dreams, make friends, create lifetime memories, and come home refreshed.
                          </p>
                        <p className="p-large">
                          Happy travels! <span aria-label="Love" role="img">❤️</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div>
                  <h1 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'rgba(0, 0, 0, 0.65)' }} className="text-center h1-large">Ready to try for free?</h1>
                </div>
                <div className="flex-center">
                  <Button onClick={this.onShow1} size="large" color="blue" className="mar-03 btn-recolor-pri btn-extra-large">SIGN ME UP!</Button>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
        <Footer />
      </div>
    )
  }
}
