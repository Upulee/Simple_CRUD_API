import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:semicolon
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    // tslint:disable-next-line:semicolon
    })
  }

  // Delete employee
  deleteEmployee(id) {
    // tslint:disable-next-line:one-line
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        // tslint:disable-next-line:semicolon
        this.loadEmployees()
      // tslint:disable-next-line:semicolon
      })
    }
  }

}
