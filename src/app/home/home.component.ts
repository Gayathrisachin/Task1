import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private router:Router) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(UserComponent, {
     data:{content:'text'}
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  
  ngOnInit() {
  }

}
