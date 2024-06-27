import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input('logs') logss: any;
  @Input() log1: any;

  isLoggedinFlag = false
  loginData: { username: string, password: string; } = { username: "", password: ""};

  @Output('customEvent') events = new EventEmitter<any>();

  public sendDataToParent() {
    this.events.emit(this.log1);
  }

  recieveFormData(loginInfo: { username: string, password: string; }) {
    console.log(loginInfo);
    this.loginData = loginInfo
  }

  isLoggedin() {
    if (this.loginData.username === "nikhil") {
      this.isLoggedinFlag = true
    }
  }



}
