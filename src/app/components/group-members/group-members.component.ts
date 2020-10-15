import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/groups';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.css']
})
export class GroupMembersComponent implements OnInit {

  public group:Group

  constructor(private groupService:GroupsService) { }

  ngOnInit(): void {
    this.group = this.groupService.getSelectedGroup()
  }
  

}
