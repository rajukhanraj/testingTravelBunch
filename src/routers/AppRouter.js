import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from '../components/homepage';
// import Bunch from '../components/bunch';
import Loader from 'react-loader-spinner';
import Faq from '../components/faq';
import Terms from '../components/terms';
import Privacy from '../components/privacy';
import Success from '../components/success';

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
    AOS.init()
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/faq" component={Faq} />
          <Route exact={true} path="/tos" component={Terms} />
          <Route exact={true} path="/privacypolicy" component={Privacy} />
          <Route exact={true} path="/success" component={Success} />
          {/* <Route exact={true} path="/travelausers" component={Bunch} /> */}
          <Route path="*" component={HomePage} />
        </Switch>
        {this.state.loading && <div className="animate-loader"> <Loader type="Oval" color="#3fd0d3" height={80} width={80} /></div>}
      </div>
    )
  }
}
