import React, {Component} from 'react';
//import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import ProposeModal from './ProposeModal.jsx';

class ProposalButton extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
          }
        //create props
    }
    render(){
        return (
            <div>
                <button id='proposalbutton'onClick={(e) => this.setState({isOpen:true})}>Send Us Your Proposal</button>
                <ProposeModal id='proposemodal'isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}>
                    <form id='proposeform'>

                        First Name: <input type='text' required></input> Last Name:<input type='text'required></input>
                        Email Address: <input type='text' required></input>
                        State: <input type='text' value='State'></input>
                        What is your proposal?
                        <input type='text' required></input>
                        Is it scalable? How?Address
                        <input type='text' required></input>
                        <button type='submit' onClose={(e)=> this.setState({isOpen: false})}>Submit</button>
                    </form>
                </ProposeModal>
            </div>
        )
    }
};


export default ProposalButton;