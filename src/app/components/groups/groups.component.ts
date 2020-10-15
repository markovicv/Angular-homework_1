import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { User } from 'src/app/models/user.models';
import { Group } from 'src/app/models/groups';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups:Group[]
  public tokenExpire:boolean = true


  constructor(private groupService:GroupsService,private router:Router) { }

  ngOnInit(): void {
    this.getGroups()
  
  }
  getGroups(){
    this.groups = this.groupService.getGroups()
  }
  

  members(group){
    this.groupService.setSelectedGroup(group)
    this.router.navigate(['/groups/members'])
  }



  

}
