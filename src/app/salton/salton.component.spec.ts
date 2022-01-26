import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltonComponent } from './salton.component';

describe('SaltonComponent', () => {
  let component: SaltonComponent;
  let fixture: ComponentFixture<SaltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
