import React, {Component} from 'react';
import RegisterModal from './RegisterModal.jsx';


class Registration extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //create props
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value })
    }
    handleSubmit(event){
        event.preventDefault();
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password

        }

        fetch('/api/submit-registration', {
            method: 'POST',
            headers: {'Content-type': 'application/JSON'},
            body: JSON.stringify(data)
        })
        .then(() =>{
            this.setState({ isOpen: false})
        });
    }
    render(){
        return (
            <div id='regmodal'>
                <button id='registrationbutton' onClick={(e) => this.setState({isOpen:true})}>Join Our Mailing List!</button>
                <RegisterModal id='registermodal' isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}> 
                    <form onSubmit ={ this.handleSubmit }id='registerform' name='registerform'>
                        {/* save fields to an object in state */}
                        {/* <label> */}
                            <input className='inputfield' name='firstName' id='firstName' type='text' placeholder='First Name' onChange={ this.handleChange }required></input>
                        {/* </label> */}

                        {/* <label> */}
                            <input className='inputfield' name='lastName' id='lastName' type='text' placeholder='Last Name' onChange={ this.handleChange }required></input>
                        {/* </label> */}

                        {/* <label> */}
                            <input className='inputfield' id='email' name='email' type='email' placeholder='Email' onChange={ this.handleChange } required></input>
                        {/* </label> */}

                        {/* <label htmlFor='password'> */}
                            <input className='inputfield' type='password' name ='password' id="password" minLength="8" placeholder='Password'onChange={ this.handleChange } required></input>
                        {/* </label> */}
                        <button className='inputfield' type='submit'>Register!</button> 
                        {/* Onclick should take object in state and send to back with API call to a post route */}
                    </form>
                </RegisterModal>
            </div>
        )
    }
};


export default Registration;