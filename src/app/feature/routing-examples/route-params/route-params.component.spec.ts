import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamsComponent } from './route-params.component';

describe('RouteParamsComponent', () => {
  let component: RouteParamsComponent;
  let fixture: ComponentFixture<RouteParamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteParamsComponent]
    });
    fixture = TestBed.createComponent(RouteParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
