import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailproduct } from './detailproduct';

describe('Detailproduct', () => {
  let component: Detailproduct;
  let fixture: ComponentFixture<Detailproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
