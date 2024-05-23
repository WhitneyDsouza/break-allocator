import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftInputComponent } from './shift-input.component';

describe('ShiftInputComponent', () => {
  let component: ShiftInputComponent;
  let fixture: ComponentFixture<ShiftInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftInputComponent]
    });
    fixture = TestBed.createComponent(ShiftInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
