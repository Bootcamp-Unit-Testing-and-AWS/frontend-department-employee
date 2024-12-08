import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../../../models/department.model';
import { Employee } from '../../../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
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
  // @Input() departmentArray: Department[] = [];
  // @Input() employeeArrray: Employee[] = [];

  @Output() close = new EventEmitter<void>();
  departmentService = inject(DepartmentService);
  employeeService = inject(EmployeeService);

  departments = this.departmentService.department;
  employees = this.employeeService.employee;
  //department = this.departmentService.department;

  codigo: number = 0;
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  codigo_departamento = '';
  department: Department[] | any = [];
  employee: Employee[] | any = [];

  //departmentService = inject(DepartmentService);
  save() {
    if (this.mode === 'department') {
      console.log(this.codigo, this.nombre);
      this.department = { codigo: this.codigo, nombre: this.nombre };
      this.departmentService
        .createDepartment(this.department)
        .subscribe((res: Department | any) => {
          this.department.set(res);
          console.log(res);
        });
    } else if (this.mode === 'employee') {
      this.employee = {
        codigo: this.codigo,
        nombre: this.nombre,
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        codigo_departamento: this.codigo_departamento,
      };
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (response: Employee | any) => {
          this.employee.set(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    this.close.emit();
  }
}
