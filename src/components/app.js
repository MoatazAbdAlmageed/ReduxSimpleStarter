import React, { Component } from 'react';


import Goodbye from './goodbye';

export default class App extends Component {
  render() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <Goodbye name="Moataz" />
            {/*Warning: Failed prop type: Goodbye: prop type `name` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`.*/}


        </div>
    );
  }
}

