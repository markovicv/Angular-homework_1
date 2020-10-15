import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  user:User
  private readonly userUrl = 'http://localhost:8080/users'

  constructor(private http:HttpClient) { }



  updateUser(user){
    return this.http.put<User>(this.userUrl,user,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("jwt")
      }
    })
  }

  setUser(user){
    this.user = user
  }

  getUser(){
    return this.user
  }



}
