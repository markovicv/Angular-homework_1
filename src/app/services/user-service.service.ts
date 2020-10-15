import { Injectable, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnDestroy {

  private readonly loginUrl = 'http://localhost:8080/login'
  private users:Observable<User[]>

  constructor(private http:HttpClient) { }


  ngOnDestroy(){

  }
}


interface User{

}
