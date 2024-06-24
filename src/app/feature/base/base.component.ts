import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  public data = {
    auditLog: true,
    errorLog: true,
    slowQueryLog: false
  };
  public data1 = {
    auditLog: true,
    errorLog: true,
    slowQueryLog: false
  };
  datafromChild: any;

  recieveDataFromChild(data: any) {
    console.log(data);
    this.datafromChild = data

  }
}
