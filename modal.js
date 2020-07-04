import React from 'react';
import './modal.css';


const modal = (props) => {
    return(
        <div>
            <div className="modal-wrapper"
            style={{
                transform: props.show ? 'translateY(0vh)':'tranlateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                <div className="modal-header">
                    <h2>Modal Header</h2>
                    <span className="close-modal-btn" onClick={props.close}>x</span>
                </div>
                <div className="modal-body">
                    <p>
                        This is a paragraph for the modal body.
                    </p>
                </div>
                <div className="modal-footer">
                    <p>This is modal footer</p>
                </div>
            </div>
        </div>
    )
}
export default modal;