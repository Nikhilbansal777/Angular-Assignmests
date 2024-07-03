import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCardComponent } from '../dynamic-card/dynamic-card.component';

@Component({
  selector: 'app-nondynamicbase',
  templateUrl: './nondynamicbase.component.html',
  styleUrls: ['./nondynamicbase.component.css']
})
export class NondynamicbaseComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  createComponent(buttonType: string) {
    this.container.clear();
    const component = this.container.createComponent(DynamicCardComponent);
    component.instance.name = buttonType;
    component.instance.closed.subscribe((res) => {
      alert(`Hi ${res.name}`);
    });
  }

}
