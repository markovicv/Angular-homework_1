import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user.models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly usersUri = 'http://localhost:8080/users'
  users:Observable<User[]>;

  constructor(private http:HttpClient) { }


  getUsers(){
    
    this.users= this.http.get<User[]>(this.usersUri,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("jwt")
      }
    })
    return this.users
  }

  deleteUser(id){
    
    return this.http.delete<User>(this.usersUri+'/'+id,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("jwt")
      }
    })
  }



  createUser(user){
    return this.http.post<User>(this.usersUri,user,{
     

      headers:{
        Authorization: "Bearer "+localStorage.getItem("jwt")
      }
    })
  }




}
