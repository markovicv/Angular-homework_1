import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import {UserEditService} from 'src/app/services/user-edit.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class EditCompComponent implements OnInit {

  user:User
  tokenValid = true

  constructor(private userEditService:UserEditService,private router:Router) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
   this.user = this.userEditService.getUser()
  }

  updateUser(firstName,lastName){
    this.user.firstName = firstName
    this.user.lastName = lastName
    this.userEditService.updateUser(this.user).subscribe(data=>{
      console.log(data)
    },(error)=>{
      console.log(error)
      if(error.status==401){
        this.router.navigate(['/home'])
        window.alert("TOKEN EXPIRED!!")
      }
    })
  }

}
