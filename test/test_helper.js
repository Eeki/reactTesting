import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';



//  Set up testing environment to run like browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //global.document == window.document
global.window = global.document.defaultView;
const $ = _$(global.window);


// build 'render Component' helper that should render a given react class
function renderComponent( ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  ); // Make instance from component

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML that is wrapped to jquery element. jQuery wrapping because then we can use jquery-chai testing methods (they are good ones)
}

// Build a helper for simulating events
$.fn.simulate = function(eventName, value) { // Now we can call for example --> $('div').simulate
  if(value) {
    this.val(value); //<-- if value put the value to element
  }
  TestUtils.Simulate[eventName](this[0]);    //"this" refers in example "$('div').simulate" to the 'div' element. So "this" is the selected element.
};

// Set up Chai-jquery
chaiJquery(chai, chai.util, $); // check docks for more info

export { renderComponent, expect };