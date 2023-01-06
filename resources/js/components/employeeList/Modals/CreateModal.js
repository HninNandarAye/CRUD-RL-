import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    //Creating employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    }

    //Creating employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    }

    //Storing employee data
    storeEmoloyeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
            toast.success("Employee saved successfully");
            setTimeout(() => {
                location.reload();
            }, 2500);
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-bs-toggle="modal"
                        data-bs-target="#createModal"
                    >
                        Add New Employee
                    </button>
                </div>
                <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Creating Employee</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            className='form-control mb-3'
                                            id="employeeName"
                                            placeholder="Enter Name"
                                            onChange={this.inputEmployeeName} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            className='form-control'
                                            id="employeeSalary"
                                            placeholder="Enter Salary"
                                            onChange={this.inputEmployeeSalary} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input type="submit"
                                    className='btn btn-info'
                                    value="Save"
                                    onClick={this.storeEmoloyeeData} />
                                <button type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;