import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div style={{ width: '90%' }}>
          <div className="footer-align">
            <div className="footer-align-realign">
              <div>
                <img style={{ width: '12rem', height: 'auto' }} src="../images/logowhite.png" alt="" />
              </div>
              {/* <div>
                <a href="mailto:hello@travelabunch.com?Subject=Contact%20Us">
                  <Button size="large" className="mar-03 btn-recolor-nav color-white-imp">EMAIL US</Button>
                </a>
              </div> */}
            </div>
          </div>
          <div className="flex-center">
            <ul className="ul-footer">
              <li className="text-color-white">
                <a className="text-color-white" href="/privacypolicy">
                  <span onClick={() => window.location.assign('/privacypolicy')} className="right-move">
                    Privacy Policy
                  </span>
                </a>
                <span className="right-move">
                  |
                </span>
                <a className="text-color-white" href="/tos">
                  <span className="right-move">
                    Terms & Conditions
                  </span>
                </a>
                <span className="right-move">
                  |
                </span>
                <a className="text-color-white" href="mailto:hello@travelabunch.com?Subject=Contact%20Us">
                  <span>
                    Contact Us
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
