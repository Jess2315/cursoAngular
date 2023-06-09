import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IEmpleado } from '../interfaces/empleadosInterfaces';

const API_GET_ALL_EMPLOYEE = environment.API_GET_ALL_EMPLOYEE;
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  getAllEmployee(){
    return this.http.get<IEmpleado>(API_GET_ALL_EMPLOYEE);

  }
}
