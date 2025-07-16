import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productitem } from './productitem';

describe('Productitem', () => {
  let component: Productitem;
  let fixture: ComponentFixture<Productitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
