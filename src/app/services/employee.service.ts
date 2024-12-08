import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  private readonly apiUrl = 'http://localhost:3000/employee';
  private http = inject(HttpClient);
  employee = signal<Employee[] | null>([]);

  getEmployees() {
    return this.http.get(this.apiUrl);
  }
  getEmployeeByCode(codigo: number) {
    return this.http.get(`${this.apiUrl}/${codigo}`);
  }
  createEmployee(employee: Employee) {
    return this.http.post(this.apiUrl, employee);
  }
  updateEmployee(codigo: number, employee: Employee) {
    return this.http.put(`${this.apiUrl}/${codigo}`, employee);
  }

  deleteEmployee(codigo: number) {
    return this.http.delete(`${this.apiUrl}/${codigo}`);
  }
}
