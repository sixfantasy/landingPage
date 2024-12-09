import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonchangeComponent } from './buttonchange.component';

describe('ButtonchangeComponent', () => {
  let component: ButtonchangeComponent;
  let fixture: ComponentFixture<ButtonchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonchangeComponent]
    });
    fixture = TestBed.createComponent(ButtonchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
