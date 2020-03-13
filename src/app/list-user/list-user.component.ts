import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
// import {DataSource} from '@angular/cdk/collections';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  employee:User[]
  showDeletedMessage: boolean;

  // displayedColumns: string[] = ['name', 'empId', 'department', 'email','dateOfJoin','action'];
  // dataSource = new UserDataSource(this.service);

  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getUser().subscribe(data=>{
      this.employee=data
    })
  }
  deleteEmployee(user: User): void {
  
    this.service.deleteUser(user.id)
      .subscribe( data => {
        this.employee = this.employee.filter(u => u !== user);
        // this.showDeletedMessage = true;
        // setTimeout(() => this.showDeletedMessage = false, 3000);
      })
    
  };

}
// export class UserDataSource extends DataSource<any> {
//   constructor(private service: UserService) {
//     super();
//   }
//   connect(): Observable<User[]> {
//     return this.service.getUser();
//   }
//   disconnect() {}
// }