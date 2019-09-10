import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateInputComponent } from './communicate-input.component';

describe('CommunicateInputComponent', () => {
  let component: CommunicateInputComponent;
  let fixture: ComponentFixture<CommunicateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
