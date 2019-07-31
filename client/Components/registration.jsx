import React, {Component} from 'react';
import RegisterModal from './RegisterModal.jsx';


class Registration extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
          }
        //create props
    }
    render(){
        return (
            <div id='regmodal'>
                <button id='registrationbutton' onClick={(e) => this.setState({isOpen:true})}>Join Our Mailing List!</button>
                <RegisterModal id='registermodal' isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}> 
                    <form id='registerform'>
                        Name:
                        <input className='inputfield' id='fnfield' type='text' value='First Name' required></input><input id='lnfield' className='inputfield' type='text' value='Last Name' required></input>
                        <input className='inputfield' type='text' value='Email Address' required></input>
                        <input className='inputfield' type='password' id="pass" name="password" minlength="8" required></input>
                        <button className='inputfield' type='submit'>Register!</button>
                    </form>
                </RegisterModal>
            </div>
        )
    }
};


export default Registration;