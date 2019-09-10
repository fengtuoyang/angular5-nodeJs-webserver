import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePgComponent } from './reactive-pg.component';

describe('ReactivePgComponent', () => {
  let component: ReactivePgComponent;
  let fixture: ComponentFixture<ReactivePgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
