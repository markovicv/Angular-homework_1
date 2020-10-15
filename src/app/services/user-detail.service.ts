import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  public user:User

  constructor() { }


  setUserDetail(user){
    this.user = user
  }

  getUserDetail(){
    console.log(this.user.firstName)
    return this.user
  }

}
