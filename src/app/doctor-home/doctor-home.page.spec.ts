import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHomePage } from './doctor-home.page';

describe('DoctorHomePage', () => {
  let component: DoctorHomePage;
  let fixture: ComponentFixture<DoctorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
