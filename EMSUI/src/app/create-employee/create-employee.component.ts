import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Edepartment } from '../edepartment';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
// import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class CreateEmployeeComponent implements OnInit {
  dCode = Edepartment;

  employee: Employee = new Employee();

  constructor(private employeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    console.log(this.employee);
    this.employeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }


}
