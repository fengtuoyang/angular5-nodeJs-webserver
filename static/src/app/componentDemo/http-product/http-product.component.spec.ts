import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpProductComponent } from './http-product.component';

describe('HttpProductComponent', () => {
  let component: HttpProductComponent;
  let fixture: ComponentFixture<HttpProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
