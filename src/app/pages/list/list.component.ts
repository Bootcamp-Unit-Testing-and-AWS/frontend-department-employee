import { Component, inject } from '@angular/core';

import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { Department } from '../../../../models/department.model.js';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from '../../components/department/department.component';
import { EmployeeComponent } from '../../components/employee/employee.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ModalComponent,
    CommonModule,
    FormsModule,
    DepartmentComponent,
    EmployeeComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  departmentService = inject(DepartmentService);
  department = this.departmentService.department;
  departmentArray: Department[] = [];

  view: 'departments' | 'employees' = 'departments';
  modalIsOpen = false;
  modalMode: 'department' | 'employee' = 'department';

  openModal(mode: 'department' | 'employee') {
    this.modalMode = mode;
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }
}
