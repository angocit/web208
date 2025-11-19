import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientlayou } from './clientlayou';

describe('Clientlayou', () => {
  let component: Clientlayou;
  let fixture: ComponentFixture<Clientlayou>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clientlayou]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clientlayou);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
