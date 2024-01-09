import { Component } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})

export class PageContentComponent {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.refreshEmployees();
  }

  refreshEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error('Error fetching employees', error)
    );
  }

  saveEmp(emp:NgForm): void {
    console.log(emp)
  }
  
}
