import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdMapComponent } from './gd-map.component';

describe('GdMapComponent', () => {
  let component: GdMapComponent;
  let fixture: ComponentFixture<GdMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
