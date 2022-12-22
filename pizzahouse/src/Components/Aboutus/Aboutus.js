import React, { Component } from 'react';
import Header from '../HomePage/Header/Header';
import Land from './land/land';
// import Paragraph from './paragraph/paragraph';

import Paragraph from './paragraph/paragraph';
// import Leftparagraoh from './paragraph/leftparagraoh';


class Aboutus extends Component {
  render() {
    return (
      <div>
        <Header />
        <Land />
        {/* <Paragraph /> */}    
        <Paragraph />

      </div>
    )
  }
}

export default Aboutus
