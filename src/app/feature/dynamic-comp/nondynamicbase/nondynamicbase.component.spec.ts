import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NondynamicbaseComponent } from './nondynamicbase.component';

describe('NondynamicbaseComponent', () => {
  let component: NondynamicbaseComponent;
  let fixture: ComponentFixture<NondynamicbaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NondynamicbaseComponent]
    });
    fixture = TestBed.createComponent(NondynamicbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
