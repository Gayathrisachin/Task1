import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

import {  MomentUtcDateAdapter  } from './date.adapter';


export interface Departments{
  
  viewDepartment:string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registerForm:FormGroup
  employee:User[]
  user:User
  submitted: boolean = false;

  Departments: Departments[] = [
    {viewDepartment:"Admin"},
    {viewDepartment:"HR"},
    {viewDepartment:"IT Recriuter"},
    {viewDepartment:"Development"},
    {viewDepartment:"Testing"}
  ];


  // updateDoB(dateObject){
  //   return dateObject.toLocaleDateString()
  //  }
// close=this.dialogRef.close()
  date=new Date().toISOString()
  jsonDate=JSON.stringify(this.date).substring(0,10)
  constructor(private service:UserService,  public dialogRef: MatDialogRef<UserComponent>,private  dialog:  MatDialog, private  router:  Router,private formBuilder:FormBuilder) { }
 hideModel(){
   this.dialogRef.close();

 }
  
    ngOnInit() {
      // (document.querySelector('#table') as HTMLElement).style.display = 'none';

      this.registerForm= this.formBuilder.group({
    id:[''],
       
     name: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)])],
     empId:['',Validators.required],
      dateOfJoin: [this.jsonDate, Validators.required],
      department:['', Validators.required],
      
      email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
     
      });
      this.service.getUser().subscribe(data=>{
        this.employee=data
      })
    }
   
    hasError = (controlName: string, errorName: string) =>{
      return this.registerForm.controls[controlName].hasError(errorName);
    }
   
     createRegister() {
       this.dialogRef.close()
       this.submitted = true;
      if (this.registerForm.invalid) {
      return
      }
      else{

     this.service.createUser(this.registerForm.value).subscribe(data=>{
      // (document.querySelector('#table') as HTMLElement).style.display = 'block';

// this.router.navigate(['home'])
     });

    }
      
  }

    clear(){
      this.registerForm.reset()
    }
  }
  
