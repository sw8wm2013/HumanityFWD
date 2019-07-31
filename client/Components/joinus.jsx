import React, {Component} from 'react';
import ProposalButton from './proposal.jsx';
import Registration from './registration.jsx';

class JoinUs extends Component {
    render(){
        return (
            <div>
                <h1>JOIN US</h1>
                <p>The Humanity Forward Fund amplifies the voices of leaders and policies that are 
              rising to meet the existential challenges of the 21st century. Today, that means 
              getting Andrew Yang elected President in 2020. The American people are the collective 
              shareholders of the richest, most advanced society in the history of the world. 
              It’s our participation in society that drives the incredible technology, wealth, and 
              prosperity of the country. </p>
              <ProposalButton/>
              <Registration />
            </div>
        )
    }
};


export default JoinUs;