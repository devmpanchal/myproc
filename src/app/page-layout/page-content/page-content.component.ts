import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Employee {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  MobileNo: string;
  Gender: string;
  Status: string;
}

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})

export class PageContentComponent implements OnInit {

  employees: any[] = [];
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      EmployeeID: [0],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      MobileNo: ['', Validators.required],
      Gender: ['', Validators.required],
      Status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error('Error fetching employees', error)
    );
  }

  saveEmployee(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;

      this.employeeService.saveEmployee(newEmployee).subscribe(
        response => {
          console.log('Employee saved successfully', response);
          this.refreshEmployees(); // Refresh the employee list after saving
          this.employeeForm.reset(); // Clear the form after saving
        },
        error => console.error('Error saving employee', error)
      );
    }
  }
}
