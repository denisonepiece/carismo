import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToOrderComponent } from './how-to-order.component';

describe('HowToOrderComponent', () => {
  let component: HowToOrderComponent;
  let fixture: ComponentFixture<HowToOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
