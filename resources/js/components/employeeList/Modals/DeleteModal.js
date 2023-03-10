import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }
    //Delete function foe employee data
    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/' + employee).then(() => {
            toast.error("Employee Deleted successfully");

            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }
    render() {
        return (
            <div className="modal fade" id={"deleteModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Deleting Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete?
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => { this.deleteEmployeeData(this.props.modalId) }}>
                                Yes
                            </button>
                            <button type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;