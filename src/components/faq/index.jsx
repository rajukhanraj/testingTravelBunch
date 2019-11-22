import React, { Component } from 'react';
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default class Faq extends Component {
  render() {
    return (
      <div>
        <Navbar classPass="xnav inherit-pos" />
        <section className="container-full-faq">
          <div>
            <h1 className="text-center h1-large text-color-pri mar-bottom-1 mar-t-0">Frequently Asked Questions</h1>
          </div>
          <div className="wid-6">
            <Collapse accordion>
              <Panel header="How much is the membership?" key="1">
                <p>We offer a free 30-day trial to try the service, then it's $24 per year.</p>
              </Panel>
              <Panel header="What makes you different from other travel websites?" key="2">
                <p>We dedicate a lot of time to finding the cheapest flight deals from your home airport, including nearby airports within a 3-4 hour driving range, to amazing destinations around the world.</p>
                <p>We examine each deal and make sure that it meets our standards with the price, layovers, date availability, and reputation of the airline.</p>
                <p>Other travel websites make you search for hours to find a ticket worthwhile sometimes with prices that are out of range, date availability that sucks, long layover hours, horrible airlines, and we take that burden off of you with our time and expertise.</p>
              </Panel>
              <Panel header="Are the deals you send legit?" key="3">
                <p>The deals we find are real and we are supported by our members, so we don’t get a commission for the deals we send you. Also, you don’t buy a ticket through us, you’ll directly book the ticket with the airline of your choice.</p>
              </Panel>
              <Panel header="How often will I receive deals?" key="4">
                <p>You’ll probably receive 1-3 emails a week and we make sure to send quality deals only.</p>
              </Panel>
              <Panel header="How does the booking process work?" key="5">
                <p>You will receive deals in your email with the price range, the dates they’re available, and a link that has a sample itinerary.</p>
              </Panel>
              <Panel header="Do you send last-minute deals?" key="6">
                <p>No, all the deals we send are 2-9 months out so you can plan accordingly with your family, job, etc.</p>
              </Panel>
              <Panel header="Do you send domestic flight deals as well?" key="7">
                <p>Yes, we also send domestic deals to popular US destinations.</p>
              </Panel>
              <Panel header="Will I receive deals from only my airport or nearby airports as well?" key="8">
                <p>You’ll get deals from your home airport and airports that are within a 3-4 hour drive.</p>
              </Panel>
              <Panel header="Can I change or add more airports?" key="9">
                <p>Yes, please send us an email at <a href="mailto:hello@travelabunch.com?Subject=Can%20I%20change%20or%20add%20more%20airports?">hello@travelabunch.com</a> and we will make sure to either change or add more airports.</p>
              </Panel>
              <Panel header="Does my membership renew automatically?" key="10">
                <p>Yes, but we will make sure to send a reminder 3 days before we renew your membership.</p>
              </Panel>
              <Panel header="What is the refund policy?" key="11">
                <p>You have a 6-month money-back guarantee, no questions asked. Just send an email at <a href="mailto:hello@travelabunch.com?Subject=What%20is%20the%20refund%20policy?">hello@travelabunch.com</a> and let us know.</p>
              </Panel>
              <Panel header="How do I cancel my membership?" key="12">
                <p>Send us an email at <a href="mailto:hello@travelabunch.com?Subject=How%20do%20I%20cancel%20my%20membership?">hello@travelabunch.com</a> and we will cancel your membership.</p>
              </Panel>
            </Collapse>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
