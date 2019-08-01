import React, {Component, Fragment} from 'react';
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
            <Fragment>
                <button id='proposalbutton'onClick={(e) => this.setState({isOpen:true})}>Send Us Your Proposal</button>
                <ProposeModal id='proposemodal'isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}>
                    <form id='proposeform'>
                        <input type='text' className='proposeinput' id=' proposeinput propfirstname'placeholder='First Name'required></input> 
                        <input type='text' className='proposeinput'id=' proposeinput proplastname' placeholder='Last Name'required></input>
                        <input type='text' className='proposeinput' id=' proposeinput propemail'placeholder='Email'required></input>
                        <select type='text' className='proposeinput' id=' proposeinput propstate' placeholder='State'>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>District of Columbia</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Puerto Rico</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                        </select>
                        <textarea rows="4" className='proposeinput'cols="50" className='proposeinput'type='text' id='proposeinput proposalfield' placeholder='What Is Your Proposal?' required></textarea>
                        <textarea rows="4" cols="50" type='text' className='proposeinput'id='proposeinput scalablefield'placeholder='Is it Scalable? How?' required></textarea>
                        <button className='proposeinput' id='submitproposal' type='submit' onClose={(e)=> this.setState({isOpen: false})}>Submit</button>
                    </form>
                </ProposeModal>
            </Fragment>
        )
    }
};


export default ProposalButton;