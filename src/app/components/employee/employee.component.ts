import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employeeService = inject(EmployeeService);
  employees = this.employeeService.employee;

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: any) => {
        this.employees.set(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
