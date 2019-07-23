import React from 'react';
import './style.css';
import { Input, TextArea, CheckBox, FormBtn } from "../Form";

const EditForm = (props) => {
    return (
        <div>
            <div className="modal-wrapper edit-form"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Edit Details:</h3>
                    <span className="close-modal-btn" onClick={props.close}>x</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                {/* <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div> */}

            </div>
        </div>
    )
}

export default EditForm;