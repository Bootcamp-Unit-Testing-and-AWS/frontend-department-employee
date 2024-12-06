import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../../../models/department.model';
import { Employee } from '../../../../models/employee.model';
//import { DepartmentService } from '../../services/department/department.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() mode: 'department' | 'employee' = 'department'; // Define mode como @Input
  @Input() departmentArray: Department[] = [];
  @Input() employeeArrray: Employee[] = [];

  @Output() close = new EventEmitter<void>();
  departmentService = inject(DepartmentService);
  //department = this.departmentService.department;

  codigo: number = 0;
  nombre: string = '';
  department: any = [];

  //departmentService = inject(DepartmentService);
  save() {
    if (this.mode === 'department') {
      console.log(this.codigo, this.nombre);
      this.department = { codigo: this.codigo, nombre: this.nombre };
      this.departmentService
        .createDepartment(this.department)
        .subscribe((res) => {
          console.log(res);
        });
    } else if (this.mode === 'employee') {
    }
    this.close.emit();
  }
}
