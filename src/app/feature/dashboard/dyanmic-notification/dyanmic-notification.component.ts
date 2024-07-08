import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dyanmic-notification',
  templateUrl: './dyanmic-notification.component.html',
  styleUrls: ['./dyanmic-notification.component.css']
})
export class DyanmicNotificationComponent {
  @Input() editUserSuccess: string = "";

  @Output() closed = new EventEmitter<any>();

  close() {
    this.closed.emit(this.editUserSuccess);
    console.log("hi");
    
  }
}
