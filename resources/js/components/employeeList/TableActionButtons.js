import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ViewModal from './Modals/ViewModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';

class TableActionButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null
        }
    }

    //getting individual employee data
    getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/detail', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentEmployeeSalary: response.data.salary
            })
        })
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewModal" + this.props.eachRowId}
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}>
                    View
                </button>
                <ViewModal modalId={this.props.eachRowId} employeeData={this.state} />
                <button type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateModal" + this.props.eachRowId}
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}>
                    update
                </button>
                <UpdateModal modalId={this.props.eachRowId} employeeData={this.state} />
                <button type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteModal" + this.props.eachRowId}
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}>
                    Delete
                </button>
                <DeleteModal modalId={this.props.eachRowId} employeeData={this.state} />
            </div>
        );
    }
}

export default TableActionButtons;