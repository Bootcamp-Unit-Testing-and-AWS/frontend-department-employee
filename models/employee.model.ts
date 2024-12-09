import { Department } from './department.model.js';
export interface Employee {
  _id?: string;
  codigo: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  codigo_departamento: string;
}
