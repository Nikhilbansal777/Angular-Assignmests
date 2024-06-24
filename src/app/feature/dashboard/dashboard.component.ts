import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input('logs') logss: any;
  @Input() log1: any;

  @Output('customEvent') events = new EventEmitter<any>();

  public sendDataToParent() {
    this.events.emit(this.log1);
  }
}
