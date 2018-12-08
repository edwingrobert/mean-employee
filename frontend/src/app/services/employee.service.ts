import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employee: Employee[];
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { 
    this.selectedEmployee = new Employee();
  }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(Employee: Employee){
    return this.http.put(this.URL_API + `/${Employee._id}`,Employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
