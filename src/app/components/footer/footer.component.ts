import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myDate
  username:String =""
  onMain=false
  constructor(private loginService:LoginserviceService ) { }

  ngOnInit(): void {
    this.myDate = Date.now()
    //this.username = this.loginService.getUsername()
    this.loginService.fire
      .subscribe(item => {
        this.username=item
      


      });

  }

}
