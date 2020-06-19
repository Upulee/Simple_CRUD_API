import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
dataEmployee: any;
  // tslint:disable-next-line:semicolon
  @Input() employeeDetails = { name: '', age: '', salary: '' }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      // tslint:disable-next-line:semicolon
      this.router.navigate(['/employee-list'])
    // tslint:disable-next-line:semicolon
    })
  }

}
