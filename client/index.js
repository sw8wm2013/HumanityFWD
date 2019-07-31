import React from 'react';
import REACTDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App.jsx';
import styles from './scss/application.scss';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import JoinUsWrapper from './joinuswrap.jsx';
import JoinUs from './components/joinus.jsx';
// import ProposalButton from './proposal.jsx';
// import Registration from './registration.jsx'; 

const routing = (
  <Router>
    <div>
      {/* <Route path='/' component={App}/> */}
      <Route path='/' component={JoinUs}/>
    </div>
  </Router>
)

render(
  <App />,
  document.getElementById('root')
);
