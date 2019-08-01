import React, {Component,Fragment} from 'react';

class ProposeModal extends Component {
    render(){
        let dialog = (
        <Fragment>
            <button className='closeproposal' onClick={this.props.onClose}>X</button>
            <div className='trueproposemodal'>{this.props.children}</div>
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


export default ProposeModal;