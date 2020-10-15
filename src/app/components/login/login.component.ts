import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string
  duration:number

  constructor(private loginservice:LoginserviceService,private router:Router) {

   }

  ngOnInit(): void {
  }

  login(username,password,duration){
    if(username ==""){
      window.alert("username empty")
      return;
    }
    if(username.length <4){
      window.alert("username must be longer")
      return
    }
    if(password==""){
      window.alert("password empty")
      return;
    }
    if(password.length<4){
      window.alert("password must be longer")
      return
    }
    if(duration==""){
      window.alert("duration invalid")
      return;
    }
    
    this.duration = duration
    this.username = username
    this.password = password 
    this.loginservice.login(this.username,this.password,this.duration).subscribe(data=>{
      this.loginservice.change()
      this.router.navigate(['/home'])
    })

    
  }



}
