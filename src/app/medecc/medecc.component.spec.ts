import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedeccComponent } from './medecc.component';

describe('MedeccComponent', () => {
  let component: MedeccComponent;
  let fixture: ComponentFixture<MedeccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedeccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedeccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
