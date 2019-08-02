import React, {Component, Fragment} from 'react';


class RegisterModal extends Component {
    render(){
        let dialog = (
            <Fragment>
                <button id='closebutton' onClick={this.props.onClose}>X</button>
            <div className='truemodal'>{this.props.children}</div>
            </Fragment>
        );

        if(!this.props.isOpen){
            dialog = null;
        }
        return (
            <Fragment>
                {dialog}
            </Fragment>
        )
    }
}


export default RegisterModal;