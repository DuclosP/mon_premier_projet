import { Component, OnInit } from '@angular/core';
import { FakeLoginServiceService } from 'src/app/services/fake-login-service.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  connected : boolean = false;
  compte : string ="";
  password : string ="";

  constructor(private _floginService : FakeLoginServiceService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.connected = this._floginService.connect()
  }

  logout(){
    this.connected = this._floginService.disconnect()
  }
}
