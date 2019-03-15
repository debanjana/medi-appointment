import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionHomePage } from './production-home.page';

describe('ProductionHomePage', () => {
  let component: ProductionHomePage;
  let fixture: ComponentFixture<ProductionHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
