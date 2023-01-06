<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Models\Employee;

class EmployeesController extends Controller
{
    //Get employee list
    public function getEmployeeList()
    {
        try {
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //Get employee detail
    public function getEmployeeDetail(Request $request)
    {
        try {
            $employeeData = Employee::find($request->get('employeeId'));
            return response()->json($employeeData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //Updating employee data.
    public function updateEmployeeDate(Request $request)
    {
        try {
            $employeeId = $request->get('employeeId');
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //Deleting employee data
    public function destroyEmployee(Employee $employee)
    {
        try {
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function storeEmployee(Request $request)
    {
        try {
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::create([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->jspon([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
