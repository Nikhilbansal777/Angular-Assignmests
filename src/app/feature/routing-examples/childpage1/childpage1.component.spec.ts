import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childpage1Component } from './childpage1.component';

describe('Childpage1Component', () => {
  let component: Childpage1Component;
  let fixture: ComponentFixture<Childpage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Childpage1Component]
    });
    fixture = TestBed.createComponent(Childpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
