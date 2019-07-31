import React, {Component} from 'react';

class ProposeModal extends Component {
    render(){
        let dialog = (
        <div>
            <button onClick={this.props.onClose}>X</button>
            <div>{this.props.children}</div>
        </div>
        );

        if(!this.props.isOpen){
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}


export default ProposeModal;