import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanmicNotificationComponent } from './dyanmic-notification.component';

describe('DyanmicNotificationComponent', () => {
  let component: DyanmicNotificationComponent;
  let fixture: ComponentFixture<DyanmicNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyanmicNotificationComponent]
    });
    fixture = TestBed.createComponent(DyanmicNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
