import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childpage2Component } from './childpage2.component';

describe('Childpage2Component', () => {
  let component: Childpage2Component;
  let fixture: ComponentFixture<Childpage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Childpage2Component]
    });
    fixture = TestBed.createComponent(Childpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
