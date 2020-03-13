import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private router:Router,private service:UserService) {}
  openDialog(): void {
    (document.querySelector('#table') as HTMLElement).style.display = 'none';

    const dialogRef = this.dialog.open(UserComponent, {
     data:{content:'text'}
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
  }
  
  ngOnInit() {
  }

}
