import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Department } from '../../../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}
  private readonly apiUrl = 'http://localhost:3000/departamentos';
  private http = inject(HttpClient);
  department = signal<null | Department>(null);

  getDepartments() {
    return this.http.get(this.apiUrl);
  }
  getDepartmentByCode(codigo: number) {
    return this.http.get(`${this.apiUrl}/${codigo}`);
  }
  createDepartment(department: Department) {
    return this.http.post(this.apiUrl, department);
  }
  updateDepartment(codigo: number, department: Department) {
    return this.http.put(`${this.apiUrl}/${codigo}`, department);
  }

  deleteDepartment(codigo: number) {
    return this.http.delete(`${this.apiUrl}/${codigo}`);
  }
}