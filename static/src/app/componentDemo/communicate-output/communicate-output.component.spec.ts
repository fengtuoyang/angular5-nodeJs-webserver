import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateOutputComponent } from './communicate-output.component';

describe('CommunicateOutputComponent', () => {
  let component: CommunicateOutputComponent;
  let fixture: ComponentFixture<CommunicateOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicateOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
