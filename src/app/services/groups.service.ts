import { Injectable, OnInit } from '@angular/core';
import { Group } from '../models/groups';


@Injectable({
  providedIn: 'root'
})
export class GroupsService implements OnInit {
  public groups:Group[]
  public selectedGroup:Group

  constructor() {

    this.groups =[]

   }
   ngOnInit(){
  
   }

   addToGroup(group){
    for (let g of this.groups){
      if(g.name == group.name)
        return
    }
    this.groups.push(group)
   }


   getGroups(){
     return this.groups;
   }

   setSelectedGroup(group){
     this.selectedGroup = group
   }
   getSelectedGroup(){
     return this.selectedGroup
   }
   addUserToGroup(user,groupName){
    for(let g of this.groups){
      if(g.name == groupName){
        g.users.push(user)
      }
    }
  }


}
