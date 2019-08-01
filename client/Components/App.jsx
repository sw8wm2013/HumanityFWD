import React, {Component} from 'react';
import { render } from 'react-dom';
import JoinUsWrapper from './joinuswrap.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
          };
        //create props
    }
//render child components 

  render(){
    return(
    <div id='joinuswrapper'>
      <div id='test'></div>
        <JoinUsWrapper/>
    </div>
    )
  }
}

export default App;