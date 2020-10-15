import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import {UserDetailService} from 'src/app/services/user-detail.service';
import {UserEditService} from 'src/app/services/user-edit.service';
import { Observable } from 'rxjs';
import {User} from '../../models/user.models'
import {Router} from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/groups';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users:User[]
  public tokenExpire:boolean = true

  constructor(private homeservice:HomeService,private router:Router,private userDetailService: UserDetailService,
    private userEditService:UserEditService,private groupService:GroupsService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.homeservice.getUsers().subscribe(data=>{
      this.tokenExpire=false
      this.users = data

  },(error)=>{
    
    console.error(error.status)
    if(error.status==401){
      this.tokenExpire = true
    }
      
  })
  }

  edit(user){
    this.userEditService.setUser(user)
    this.router.navigate(['/home/edit'])
  }
  delete(id){
    
    this.homeservice.deleteUser(id).subscribe(data=>{
      this.getUsers()
    },(error)=>{
      if(error.status==401){
        this.ngOnInit()
        window.alert("TOKEN EXPIRED!!")
       
      }
       
    })
  }

  details(user){
    this.userDetailService.setUserDetail(user)
    this.router.navigate(['/home/details'])
  }

  createUser(firstname,lastname){
    let user = {id:0,firstName:firstname,lastName:lastname}

    this.homeservice.createUser(user).subscribe(dta=>{
      this.getUsers()
    },(error)=>{
      if(error.status==401){
        window.alert("TOKEN EXPIRED!!")
        this.ngOnInit()


      }
        
    })
  }

  createGroup(name){
    let group:Group = new Group()
    group.name = name
    this.groupService.addToGroup(group)

  }

}
