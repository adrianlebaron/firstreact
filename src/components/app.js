import React, { Component } from 'react';
import Header from './header';
import {Button} from './button'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <Header />  
          <Header /> 
          < Button title="you are wasting your time pressing my buttons" go away="now" />
          < Button title="if you click on me I'll do nothing" body="try me"/>
          < Button title="you can't make me do anything" />
      </div>
    );
  }
}
