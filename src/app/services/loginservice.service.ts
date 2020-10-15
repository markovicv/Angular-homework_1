import { Injectable, OnDestroy,EventEmitter,Output } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Credentials} from '../models/credentials.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements OnDestroy {

  private readonly loginUrl = 'http://localhost:8080/login'
  username:string
  JWT:string
  fire: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnDestroy(){

  }

  login(username,password,duration){
    // let httpParam = new HttpParams()
    return this.http.get(this.loginUrl,{
      params:{
        username:username,
        password: password,
        duration:duration
      }
      
    }).pipe(map( (responseData:Credentials)=>{
      // console.log(responseData)
      this.username = responseData.username
      
      this.JWT = responseData.JWT
      localStorage.setItem("jwt",responseData.JWT)
    }



    ))
  }
  getUsername(){
    if(this.username){
      return this.username
    }
    return ""
  }
  change() {
    console.log('change started'); 
     this.fire.emit(this.username);
   }
  

}


