<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list', [EmployeesController::class, 'getEmployeeList'])->name('employee.list');

Route::post('/get/individual/employee/detail', [EmployeesController::class, 'getEmployeeDetail'])->name('employee.detail');

Route::post('/update/employee/data', [EmployeesController::class, 'updateEmployeeDate']);

Route::delete('/delete/employee/data/{employee}', [EmployeesController::class, 'destroyEmployee']);

Route::post('/store/employee/data', [EmployeesController::class, 'storeEmployee']);

Route::get('/test', function () {
    return view('test');
});
