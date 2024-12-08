import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  departmentService = inject(DepartmentService);
  department = this.departmentService.department;

  constructor() {}
  ngOnInit() {
    this.departmentService.getDepartments().subscribe({
      next: (response: any) => {
        this.department.set(response);
        // console.log(this.products());
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
