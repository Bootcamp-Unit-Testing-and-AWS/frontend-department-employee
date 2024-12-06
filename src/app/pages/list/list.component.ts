import { Component, inject } from '@angular/core';

import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { Department } from '../../../../models/department.model.js';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  departmentService = inject(DepartmentService);
  department = this.departmentService.department;
  departmentArray: Department[] = [];
}
