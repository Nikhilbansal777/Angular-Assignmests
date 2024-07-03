import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent {
  @Input() name!: string;

  @Output() closed = new EventEmitter<any>();

  close() {
    this.closed.emit({ name: this.name });
  }
}
