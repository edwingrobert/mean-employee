import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html: 'Updated successfuly!'})
        this.getEmployees();
      })
    }else{
      this.employeeService.postEmployee(form.value)
      .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Saved successfuly!'})
      this.getEmployees();
     });
    }
    
  }
  
  resetForm(form: NgForm)
  {
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  deleteEmployee(_id: string){
    if(confirm('Are you sure you want to delete the selected Employee?')){
      this.employeeService.deleteEmployee(_id)
      .subscribe(res=>{
        this.getEmployees();
         M.toast({html: 'Employee deleted!'});
      });
         
    }
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res=> {
      this.employeeService.employee = res as Employee[];
    })
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }
}
