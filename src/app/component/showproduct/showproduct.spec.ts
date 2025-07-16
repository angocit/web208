import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showproduct } from './showproduct';

describe('Showproduct', () => {
  let component: Showproduct;
  let fixture: ComponentFixture<Showproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
