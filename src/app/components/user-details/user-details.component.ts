import { Component, OnInit } from '@angular/core';
import {UserDetailService} from 'src/app/services/user-detail.service';
import { User } from 'src/app/models/user.models';
import { Group } from 'src/app/models/groups';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user:User
  groups:Group[]

  constructor(private userDetailService : UserDetailService,private groupService:GroupsService) { }

  ngOnInit(): void {
    this.user = this.userDetailService.getUserDetail()
    this.getAllGroups()
    

  }
  joinGroup(name){
    this.groupService.addUserToGroup(this.user,name)

  }

  getAllGroups(){
    this.groups = this.groupService.getGroups()
  }

  

}
