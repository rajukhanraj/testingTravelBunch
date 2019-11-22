import React, { Component, Fragment } from 'react';
import { Icon, Button, Select, Input, Form } from 'antd';
import apiUrl from '../../../config';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../checkout';
import axios from 'axios';
import Check from '../svg/check';

const { Option, OptGroup } = Select;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show1: false,
      show2: false,
      show3: false,
      email: '',
      password: '',
      fromCity: '',
      toCity: [],
      payEnabled: false,
      loading: false,
      error: ''
    }
    this.onSwitch = this.onSwitch.bind(this);
    this.onSwitch1 = this.onSwitch1.bind(this);
    this.typing = this.typing.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.myRef = React.createRef();
  }
  onSwitch() {
    this.setState({ show: false, show1: true })
    document.getElementById('progressIdd').className = 'progress__plane progress__plane--2'
    document.getElementById('progressId').className = 'progress__plane progress__plane--2'
    this.myRef.current.className = 'progress__plane progress__plane--2'
  }
  onSwitch1() {
    this.setState({ show1: false, show2: true })
    document.getElementById('progressIdd').className = 'progress__plane progress__plane--3'
    document.getElementById('progressId').className = 'progress__plane progress__plane--3'
    this.myRef.current.className = 'progress__plane progress__plane--3'
  }
  typing(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  handleChange = (value) => this.setState({ fromCity: value })
  handleChangeTo = (value) => this.setState({ toCity: value })
  onSubmit(e) {
    e.preventDefault()
    this.setState({ loading: true })
    axios.post(`${apiUrl}/api/users/validate`, this.state)
      .then((res) => {
        console.log(res)
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('fromCity', res.data.fromCity)
        this.setState({ payEnabled: res.data.success, show3: true, show2: false, loading: false })
        document.getElementById('progressId').className = 'progress__plane progress__plane--4'
        document.getElementById('progressIdd').className = 'progress__plane progress__plane--4'
        this.myRef.current.className = 'progress__plane progress__plane--4'
      })
      .catch((e) => {
        this.setState({ error: e.response.data.message, loading: false })
      })
  }
  onComplete() {
    axios.post(`${apiUrl}/api/users/signup`, this.state)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e.response.data)
      })
  }
  render() {
    return (
      <Fragment>
        <div data-aos="fade-left" className="form-wrapper-appear greatest-index">
          <div onClick={this.props.onClose} className="pointer absolute-1 dark-color">
            <Icon className="ion__close" type="close" />
            <p className="f-size-escape m-bottom-none">Esc</p>
          </div>
          <nav className="progress">
            <ul>
              <li className="filled">
                <span></span>
              </li>
              <li className={this.state.show1 || this.state.show2 || this.state.show3 ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <li className={this.state.show2 || this.state.show3 ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <li className={this.state.show3 && this.state.payEnabled ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <div id="progressId" className="progress__plane" ref={this.myRef}>
                <svg className="plane" viewBox="0 0 241.016 241.016">
                  <path d="M142.32,79.038l1.631-48.842c0-13.892-10.652-25.152-23.779-25.152c-13.131,0-23.779,11.258-23.779,25.152l1.644,49.202 L0,132.262v25.476c0,2.791,2.259,5.052,5.055,5.052l94.843-27.506l2.037,50.097c0.004,4.312,0.732,8.372,1.997,11.97 l-32.14,18.927l-0.004,15.883c0.004,2.105,1.708,3.811,3.814,3.811l42.361-13.848h5.09v-0.001l42.361,13.846 c2.105,0.002,3.814-1.704,3.814-3.809l0.004-15.885l-32.713-19.257c1.197-3.514,1.885-7.455,1.885-11.637l2.046-50.288 l95.516,27.698c2.795,0,5.05-2.259,5.05-5.052v-25.474L142.32,79.038z"></path>
                </svg>
              </div>
            </ul>
          </nav>
          {
            this.state.show ? (
              <div className="flex-wrapper">
                <div className="full-width pad-sep-3">
                  <div className="mar-sep-3">
                    <h1 className="text-center h1-large-2 text-color-pri">Ready to travel?</h1>
                    <p className="text-center">Please follow the next few steps.</p>
                    <div className="btn-group-2 flex-center">
                      <Button onClick={this.props.onClose} size="large" className="mar-03 btn-recolor-nav">CANCEL</Button>
                      <Button onClick={this.onSwitch} size="large" color="blue" className="mar-03 btn-recolor-pri">NEXT</Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show1 ? (
              <div className="flex-wrapper" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div className="mar-sep-3">
                    <h1 className="text-center h1-large-2 text-color-pri">Choose home airport</h1>
                    <p style={{ fontSize: '16px' }} className="text-center">Select your preferred departure city.</p>
                    <form>
                      <div className="input width-six">
                      <Select onChange={this.handleChange} placeholder="Choose airport">
                          <OptGroup label="Australia">
                            <Option value="Adelaide">Adelaide</Option>
                            <Option value="Brisbane">Brisbane</Option>
                            <Option value="Melbourne">Melbourne</Option>
                            <Option value="Perth">Perth</Option>
                            <Option value="Sydney">Sydney</Option>
                          </OptGroup>
                          <OptGroup label="Canada">
                            <Option value="Calgary">Calgary</Option>
                            <Option value="Edmonton" >Edmonton</Option>
                            <Option value="Montreal" >Montreal</Option>
                            <Option value="Ottawa" >Ottawa</Option>
                            <Option value="Toronto" >Toronto</Option>
                            <Option value="Vancouver" >Vancouver</Option>
                          </OptGroup>
                          <OptGroup label="Europe">
                            <Option value="Amsterdam">Amsterdam</Option>
                            <Option
                              Option value="Athens" >Athens</Option><Option value="Barcelona" >Barcelona</Option><Option value="Basel" >Basel</Option><Option value="Belfast" >Belfast</Option><Option value="Berlin" >Berlin</Option><Option value="Brussels" >Brussels</Option><Option value="Copenhagen" >Copenhagen</Option><Option value="Dublin" >Dublin</Option><Option value="Dusseldorf" >Dusseldorf</Option><Option value="Edinburgh" >Edinburgh</Option><Option value="Frankfurt" >Frankfurt</Option><Option value="Geneva" >Geneva</Option><Option value="Hamburg" >Hamburg</Option><Option value="Helsinki" >Helsinki</Option><Option value="Lisbon" >Lisbon</Option><Option value="London" >London</Option><Option value="Madrid" >Madrid</Option><Option value="Manchester (UK)">Manchester (UK)</Option><Option value="Milan" >Milan</Option><Option value="Munich" >Munich</Option><Option value="Nice" >Nice</Option><Option value="Oslo" >Oslo</Option><Option value="Paris" >Paris</Option><Option value="Rome" >Rome</Option><Option value="Stockholm" >Stockholm</Option><Option value="Venice" >Venice</Option><Option value="Vienna" >Vienna</Option><Option value="Zurich" >Zurich</Option>
                          </OptGroup>
                          {/* <OptGroup label="US"> */}
                            {/* <Option value="Alabama">Alabama</Option> */}
                  
                          {/* </OptGroup> */}
                          <OptGroup label="Alabama">
                            <Option value="Birmingham">Birmingham</Option>
                          </OptGroup>
                          <OptGroup
label="Alaska"><Option
value="Anchorage" >Anchorage</Option></OptGroup><OptGroup
label="Arizona"><Option
value="Phoenix" >Phoenix</Option><Option
value="Tucson" >Tucson</Option></OptGroup><OptGroup
label="Arkansas"><Option
value="Little Rock" >Little Rock</Option></OptGroup><OptGroup
label="California"><Option
value="Los Angeles" >Los Angeles</Option><Option
value="Oakland" >Oakland</Option><Option
value="Sacramento" >Sacramento</Option><Option
value='San Diego' >San Diego</Option><Option
value='San Francisco' >San Francisco</Option></OptGroup><OptGroup
label="Colorado"><Option
value="Denver" >Denver</Option></OptGroup><OptGroup
label="Connecticut"><Option
value="Hartford" >Hartford</Option></OptGroup><OptGroup
label='District of Columbia'><Option
value='Washington D.C.' >Washington D.C.</Option></OptGroup><OptGroup
label="Florida"><Option
value='Fort Lauderdale' >Fort Lauderdale</Option><Option
value="Miami" >Miami</Option><Option
value="Orlando" >Orlando</Option><Option
value="Tampa" >Tampa</Option></OptGroup><OptGroup
label="Georgia"><Option
value="Atlanta" >Atlanta</Option></OptGroup><OptGroup
label="Hawaii"><Option
value="Honolulu" >Honolulu</Option></OptGroup><OptGroup
label="Idaho"><Option
value="Boise" >Boise</Option></OptGroup><OptGroup
label="Illinois"><Option
value="Chicago" >Chicago</Option></OptGroup><OptGroup
label="Indiana"><Option
value="Indianapolis" >Indianapolis</Option></OptGroup><OptGroup
label="Iowa"><Option
value='Des Moines' >Des Moines</Option><Option
value="Kansas" >Kansas</Option><Option
value="Wichita" >Wichita</Option></OptGroup><OptGroup
label="Kentucky"><Option
value="Louisville" >Louisville</Option></OptGroup><OptGroup
label="Louisiana"><Option
value='New Orleans' >New Orleans</Option></OptGroup><OptGroup
label="Maine"><Option
value="Portland" >Portland</Option></OptGroup><OptGroup
label="Maryland"><Option
value="Baltimore" >Baltimore</Option></OptGroup><OptGroup
label="Massachussets"><Option
value="Boston" >Boston</Option></OptGroup><OptGroup
label="Michigan"><Option
value="Detroit" >Detroit</Option></OptGroup><OptGroup
label="Minnesota"><Option
value="Minneapolis" >Minneapolis</Option></OptGroup><OptGroup
label="Mississippi"><Option
value="Gulfport" >Gulfport</Option><Option
value="Jackson" >Jackson</Option></OptGroup><OptGroup
label="Missouri"><Option
value='Kansas City' >Kansas City</Option><Option
value='St. Louis' >St. Louis</Option></OptGroup><OptGroup
label="Montana"><Option
value="Billings" >Billings</Option><Option
value="Bozeman" >Bozeman</Option></OptGroup><OptGroup
label="Nebraska"><Option
value="Omaha" >Omaha</Option></OptGroup><OptGroup
label="Nevada"><Option
value='Las Vegas' >Las Vegas</Option><Option
value="Reno" >Reno</Option></OptGroup><OptGroup
label='New Jersey'><Option
value="Newark" >Newark</Option></OptGroup><OptGroup
label='New Mexico'><Option
value="Albuquerque" >Albuquerque</Option></OptGroup><OptGroup
label='New York'><Option
value="Buffalo" >Buffalo</Option><Option
value='New York City' >New York City</Option></OptGroup><OptGroup
label='North Carolina'><Option
value="Charlotte" >Charlotte</Option><Option
value="Raleigh" >Raleigh</Option></OptGroup><OptGroup
label='North Dakota'><Option
value="Fargo" >Fargo</Option></OptGroup><OptGroup
label="Ohio"><Option
value="Cincinnati" >Cincinnati</Option><Option
value="Cleveland" >Cleveland</Option><Option
value="Columbus" >Columbus</Option></OptGroup><OptGroup
label="Oklahoma"><Option
value='Oklahoma City' >Oklahoma City</Option><Option
value="Tulsa" >Tulsa</Option></OptGroup><OptGroup
label="Oregon"><Option
value="Portland" >Portland</Option></OptGroup><OptGroup
label="Pennsylvania"><Option
value="Philadelphia" >Philadelphia</Option><Option
value="Pittsburgh" >Pittsburgh</Option></OptGroup><OptGroup
label='Rhode Island'><Option
value="Providence" >Providence</Option></OptGroup><OptGroup
label='South Carolina'><Option
value="Charleston" >Charleston</Option><Option
value="Columbia" >Columbia</Option><Option
value='Myrtle Beach' >Myrtle Beach</Option></OptGroup><OptGroup
label="Tennessee"><Option
value="Memphis" >Memphis</Option><Option
value="Nashville" >Nashville</Option></OptGroup><OptGroup
label="Texas"><Option
value="Austin" >Austin</Option><Option
value="Dallas" >Dallas</Option><Option
value='El Paso' >El Paso</Option><Option
value="Houston" >Houston</Option><Option
value='San Antonio' >San Antonio</Option></OptGroup><OptGroup
label="Utah"><Option
value='Salt Lake City' >Salt Lake City</Option></OptGroup><OptGroup
label="Vermont"><Option
value="Burlington" >Burlington</Option></OptGroup><OptGroup
label="Virginia"><Option
value="Norfolk" >Norfolk</Option><Option
value="Richmond" >Richmond</Option></OptGroup><OptGroup
label="Washington"><Option
value="Seattle" >Seattle</Option><Option
value="Spokane" >Spokane</Option></OptGroup><OptGroup
label='West Virginia'><Option
value='Charleston (WV)' >Charleston (WV)</Option></OptGroup><OptGroup
label="Wisconsin"><Option
value="Milwaukee" >Milwaukee</Option></OptGroup>
                        </Select>
                      </div>
                      <div className="flex-center">
                        <Button disabled={this.state.fromCity === '' ? true : false} onClick={this.onSwitch1} size="large" color="blue" className="mar-03 btn-recolor-pri">CONTINUE</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show2 ? (
              <div className="flex-wrapper" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div className="mar-sep-3">
                    <h1 className="text-center h1-large-2 text-color-pri">Enter email</h1>
                    <p style={{ fontSize: '16px' }} className="text-center">Tell us where to send your flight deals.</p>
                    <Form onSubmit={this.onSubmit}>
                      <div className="input width-six">
                        <label className="text-color-pri">EMAIL</label>
                        <Input type="email" name="email" value={this.state.email} onChange={this.typing} />
                      </div>
                      <p className="text-center">{this.state.error && this.state.error}</p>
                      <div className="flex-center">
                        <Button loading={this.state.loading} htmlType="submit" disabled={this.state.email === '' ? true : false} size="large" color="blue" className="mar-03 btn-recolor-pri">SUBMIT</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show3 && this.state.payEnabled ? (
              <div className="flex-wrapper" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div className="wid-pay">
                    <h1 className="text-center h1-large-2-1 m-bottom-none full-weight">Try free for 30 days.</h1>
                    <h1 className="text-center h1-large-2-1 full-weight">$24/year after trial.</h1>
                    <div className="mm-top-1">
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">No charge until your trial ends.</p>
                      </div>
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">6-month money-back guarantee.</p>
                      </div>
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">Cancel anytime.</p>
                      </div>
                    </div>
                    <StripeProvider apiKey="pk_live_0ZPUbo6owqYEovmFEhaVUweb">
                      <div className="example">
                        <Elements>
                          <CheckoutForm />
                        </Elements>
                      </div>
                    </StripeProvider>
                    <div className="mm-top-1">
                      <img style={{ width: '100%' }} src="../images/secure-stripe-payment-logo.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
        </div>
        <div data-aos="fade-left" className="form-wrapper-appear-mobile greatest-index">
          <div onClick={this.props.onClose} className="pointer absolute-1 dark-color">
            <Icon className="ion__close" type="close" />
            <p className="f-size-escape m-bottom-none">Esc</p>
          </div>
          <nav className="progress">
            <ul>
              <li className="filled">
                <span></span>
              </li>
              <li className={this.state.show1 || this.state.show2 || this.state.show3 ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <li className={this.state.show2 || this.state.show3 ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <li className={this.state.show3 && this.state.payEnabled ? 'filled' : 'unactive'}>
                <span></span>
              </li>
              <div id="progressIdd" className="progress__plane" ref={this.myRef}>
                <svg className="plane" viewBox="0 0 241.016 241.016">
                  <path d="M142.32,79.038l1.631-48.842c0-13.892-10.652-25.152-23.779-25.152c-13.131,0-23.779,11.258-23.779,25.152l1.644,49.202 L0,132.262v25.476c0,2.791,2.259,5.052,5.055,5.052l94.843-27.506l2.037,50.097c0.004,4.312,0.732,8.372,1.997,11.97 l-32.14,18.927l-0.004,15.883c0.004,2.105,1.708,3.811,3.814,3.811l42.361-13.848h5.09v-0.001l42.361,13.846 c2.105,0.002,3.814-1.704,3.814-3.809l0.004-15.885l-32.713-19.257c1.197-3.514,1.885-7.455,1.885-11.637l2.046-50.288 l95.516,27.698c2.795,0,5.05-2.259,5.05-5.052v-25.474L142.32,79.038z"></path>
                </svg>
              </div>
            </ul>
          </nav>
          {
            this.state.show ? (
              <div className="flex-wrapper first-modal">
                <div className="full-width pad-sep-3">
                  <div>
                    <h1 className="text-center h1-large-2 text-color-pri">Ready to travel?</h1>
                    <p style={{ fontSize: '16px' }} className="text-center">Please follow the next few steps.</p>
                    <div className="btn-group-2 flex-center">
                      <Button onClick={this.props.onClose} size="large" className="mar-03 btn-recolor-nav">CANCEL</Button>
                      <Button onClick={this.onSwitch} size="large" color="blue" className="mar-03 btn-recolor-pri">NEXT</Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show1 ? (
              <div className="flex-wrapper second-modal" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div>
                    <h1 className="text-center h1-large-2 text-color-pri">Choose home airport</h1>
                    <p style={{ fontSize: '16px' }} className="text-center">Select your preferred departure city.</p>
                    <form className="form-center">
                      <div className="input">
                      <Select onChange={this.handleChange} placeholder="Choose airport">
                          <OptGroup label="Australia">
                            <Option value="Adelaide">Adelaide</Option>
                            <Option value="Brisbane">Brisbane</Option>
                            <Option value="Melbourne">Melbourne</Option>
                            <Option value="Perth">Perth</Option>
                            <Option value="Sydney">Sydney</Option>
                          </OptGroup>
                          <OptGroup label="Canada">
                            <Option value="Calgary">Calgary</Option>
                            <Option value="Edmonton" >Edmonton</Option>
                            <Option value="Montreal" >Montreal</Option>
                            <Option value="Ottawa" >Ottawa</Option>
                            <Option value="Toronto" >Toronto</Option>
                            <Option value="Vancouver" >Vancouver</Option>
                          </OptGroup>
                          <OptGroup label="Europe">
                            <Option value="Amsterdam">Amsterdam</Option>
                            <Option
                              Option value="Athens" >Athens</Option><Option value="Barcelona" >Barcelona</Option><Option value="Basel" >Basel</Option><Option value="Belfast" >Belfast</Option><Option value="Berlin" >Berlin</Option><Option value="Brussels" >Brussels</Option><Option value="Copenhagen" >Copenhagen</Option><Option value="Dublin" >Dublin</Option><Option value="Dusseldorf" >Dusseldorf</Option><Option value="Edinburgh" >Edinburgh</Option><Option value="Frankfurt" >Frankfurt</Option><Option value="Geneva" >Geneva</Option><Option value="Hamburg" >Hamburg</Option><Option value="Helsinki" >Helsinki</Option><Option value="Lisbon" >Lisbon</Option><Option value="London" >London</Option><Option value="Madrid" >Madrid</Option><Option value="Manchester (UK)">Manchester (UK)</Option><Option value="Milan" >Milan</Option><Option value="Munich" >Munich</Option><Option value="Nice" >Nice</Option><Option value="Oslo" >Oslo</Option><Option value="Paris" >Paris</Option><Option value="Rome" >Rome</Option><Option value="Stockholm" >Stockholm</Option><Option value="Venice" >Venice</Option><Option value="Vienna" >Vienna</Option><Option value="Zurich" >Zurich</Option>
                          </OptGroup>
                          {/* <OptGroup label="US"> */}
                            {/* <Option value="Alabama">Alabama</Option> */}
                            
                          {/* </OptGroup> */}
                          <OptGroup label="Alabama">
                            <Option value="Birmingham">Birmingham</Option>
                          </OptGroup>
                          <OptGroup
label="Alaska"><Option
value="Anchorage" >Anchorage</Option></OptGroup><OptGroup
label="Arizona"><Option
value="Phoenix" >Phoenix</Option><Option
value="Tucson" >Tucson</Option></OptGroup><OptGroup
label="Arkansas"><Option
value="Little Rock" >Little Rock</Option></OptGroup><OptGroup
label="California"><Option
value="Los Angeles" >Los Angeles</Option><Option
value="Oakland" >Oakland</Option><Option
value="Sacramento" >Sacramento</Option><Option
value='San Diego' >San Diego</Option><Option
value='San Francisco' >San Francisco</Option></OptGroup><OptGroup
label="Colorado"><Option
value="Denver" >Denver</Option></OptGroup><OptGroup
label="Connecticut"><Option
value="Hartford" >Hartford</Option></OptGroup><OptGroup
label='District of Columbia'><Option
value='Washington D.C.' >Washington D.C.</Option></OptGroup><OptGroup
label="Florida"><Option
value='Fort Lauderdale' >Fort Lauderdale</Option><Option
value="Miami" >Miami</Option><Option
value="Orlando" >Orlando</Option><Option
value="Tampa" >Tampa</Option></OptGroup><OptGroup
label="Georgia"><Option
value="Atlanta" >Atlanta</Option></OptGroup><OptGroup
label="Hawaii"><Option
value="Honolulu" >Honolulu</Option></OptGroup><OptGroup
label="Idaho"><Option
value="Boise" >Boise</Option></OptGroup><OptGroup
label="Illinois"><Option
value="Chicago" >Chicago</Option></OptGroup><OptGroup
label="Indiana"><Option
value="Indianapolis" >Indianapolis</Option></OptGroup><OptGroup
label="Iowa"><Option
value='Des Moines' >Des Moines</Option><Option
value="Kansas" >Kansas</Option><Option
value="Wichita" >Wichita</Option></OptGroup><OptGroup
label="Kentucky"><Option
value="Louisville" >Louisville</Option></OptGroup><OptGroup
label="Louisiana"><Option
value='New Orleans' >New Orleans</Option></OptGroup><OptGroup
label="Maine"><Option
value="Portland" >Portland</Option></OptGroup><OptGroup
label="Maryland"><Option
value="Baltimore" >Baltimore</Option></OptGroup><OptGroup
label="Massachussets"><Option
value="Boston" >Boston</Option></OptGroup><OptGroup
label="Michigan"><Option
value="Detroit" >Detroit</Option></OptGroup><OptGroup
label="Minnesota"><Option
value="Minneapolis" >Minneapolis</Option></OptGroup><OptGroup
label="Mississippi"><Option
value="Gulfport" >Gulfport</Option><Option
value="Jackson" >Jackson</Option></OptGroup><OptGroup
label="Missouri"><Option
value='Kansas City' >Kansas City</Option><Option
value='St. Louis' >St. Louis</Option></OptGroup><OptGroup
label="Montana"><Option
value="Billings" >Billings</Option><Option
value="Bozeman" >Bozeman</Option></OptGroup><OptGroup
label="Nebraska"><Option
value="Omaha" >Omaha</Option></OptGroup><OptGroup
label="Nevada"><Option
value='Las Vegas' >Las Vegas</Option><Option
value="Reno" >Reno</Option></OptGroup><OptGroup
label='New Jersey'><Option
value="Newark" >Newark</Option></OptGroup><OptGroup
label='New Mexico'><Option
value="Albuquerque" >Albuquerque</Option></OptGroup><OptGroup
label='New York'><Option
value="Buffalo" >Buffalo</Option><Option
value='New York City' >New York City</Option></OptGroup><OptGroup
label='North Carolina'><Option
value="Charlotte" >Charlotte</Option><Option
value="Raleigh" >Raleigh</Option></OptGroup><OptGroup
label='North Dakota'><Option
value="Fargo" >Fargo</Option></OptGroup><OptGroup
label="Ohio"><Option
value="Cincinnati" >Cincinnati</Option><Option
value="Cleveland" >Cleveland</Option><Option
value="Columbus" >Columbus</Option></OptGroup><OptGroup
label="Oklahoma"><Option
value='Oklahoma City' >Oklahoma City</Option><Option
value="Tulsa" >Tulsa</Option></OptGroup><OptGroup
label="Oregon"><Option
value="Portland" >Portland</Option></OptGroup><OptGroup
label="Pennsylvania"><Option
value="Philadelphia" >Philadelphia</Option><Option
value="Pittsburgh" >Pittsburgh</Option></OptGroup><OptGroup
label='Rhode Island'><Option
value="Providence" >Providence</Option></OptGroup><OptGroup
label='South Carolina'><Option
value="Charleston" >Charleston</Option><Option
value="Columbia" >Columbia</Option><Option
value='Myrtle Beach' >Myrtle Beach</Option></OptGroup><OptGroup
label="Tennessee"><Option
value="Memphis" >Memphis</Option><Option
value="Nashville" >Nashville</Option></OptGroup><OptGroup
label="Texas"><Option
value="Austin" >Austin</Option><Option
value="Dallas" >Dallas</Option><Option
value='El Paso' >El Paso</Option><Option
value="Houston" >Houston</Option><Option
value='San Antonio' >San Antonio</Option></OptGroup><OptGroup
label="Utah"><Option
value='Salt Lake City' >Salt Lake City</Option></OptGroup><OptGroup
label="Vermont"><Option
value="Burlington" >Burlington</Option></OptGroup><OptGroup
label="Virginia"><Option
value="Norfolk" >Norfolk</Option><Option
value="Richmond" >Richmond</Option></OptGroup><OptGroup
label="Washington"><Option
value="Seattle" >Seattle</Option><Option
value="Spokane" >Spokane</Option></OptGroup><OptGroup
label='West Virginia'><Option
value='Charleston (WV)' >Charleston (WV)</Option></OptGroup><OptGroup
label="Wisconsin"><Option
value="Milwaukee" >Milwaukee</Option></OptGroup>
                        </Select>
                      </div>
                      <div className="flex-center">
                        <Button disabled={this.state.fromCity === '' ? true : false} onClick={this.onSwitch1} size="large" color="blue" className="mar-03 btn-recolor-pri">CONTINUE</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show2 ? (
              <div className="flex-wrapper second-modal" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div>
                    <h1 className="text-center h1-large-2 text-color-pri">Enter email</h1>
                    <p style={{ fontSize: '16px' }} className="text-center">Tell us where to send your flight deals.</p>
                    <Form className="form-center" onSubmit={this.onSubmit}>
                      <div className="input">
                        <label className="text-color-pri">EMAIL</label>
                        <Input type="email" name="email" value={this.state.email} onChange={this.typing} />
                      </div>
                      <div className="flex-center">
                        <Button loading={this.state.loading} htmlType="submit" disabled={this.state.email === '' ? true : false} size="large" color="blue" className="mar-03 btn-recolor-pri">SUBMIT</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            this.state.show3 && this.state.payEnabled ? (
              <div className="flex-wrapper second-modal" data-aos="fade-left">
                <div className="full-width pad-sep-3">
                  <div className="wid-pay">
                    <h1 className="text-center h1-large-2-1 m-bottom-none full-weight">Try free for 30 days.</h1>
                    <h1 className="text-center h1-large-2-1 full-weight">$24/year after trial.</h1>
                    <div className="mm-top-1">
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">No charge until your trial ends</p>
                      </div>
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">6-month money-back guarantee</p>
                      </div>
                      <div className="list-pay-items">
                        <Check/>
                        <p className="mr-left-05">Cancel anytime</p>
                      </div>
                    </div>
                    <div>
                    </div>
                    <StripeProvider apiKey="pk_live_0ZPUbo6owqYEovmFEhaVUweb">
                      <div className="example">
                        <Elements>
                          <CheckoutForm />
                        </Elements>
                      </div>
                    </StripeProvider>
                    <div className="mm-top-1">
                      <img style={{ width: '100%' }} src="../images/secure-stripe-payment-logo.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
        </div>
      </Fragment>
    )
  }
}
