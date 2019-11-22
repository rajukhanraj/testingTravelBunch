import React, { Component } from 'react';
import NavModal from './navmodal';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.onShow = this.onShow.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  onShow() {
    this.setState({ show: true })
  }
  onClose() {
    this.setState({ show: false })
  }
  render() {
    return (
      <nav className={this.props.classPass}>
        {this.state.show ? <NavModal onClose={this.onClose} /> : null}
        <ul className="ul-nav">
          <li className="li-right-adjust">
            <a href="/">
              <img style={{ width: '12rem', height: 'auto' }} src="../images/01.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="/faq">
              <button style={{ fontWeight: '600' }} size="large" className="mar-03 btn-recolor-nav">FAQ</button>
            </a>
          </li>
        </ul>

        <ul className="ul-nav-mini">
          <li className="li-right-adjust">
            <a href="/">
              <img style={{ width: '10rem', height: 'auto' }} src="../images/01.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="/faq">
              <button style={{ fontWeight: '600' }} size="large" className="mar-03 btn-recolor-nav">FAQ</button>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
