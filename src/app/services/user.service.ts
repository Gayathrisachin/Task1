import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string="http://localhost:3000/Users"
  constructor(private http:HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  createUser(data){
    return this.http.post(this.url,data)
  }

  deleteUser(id:number){
    return this.http.delete(this.url +'/'+id)
  }
}
