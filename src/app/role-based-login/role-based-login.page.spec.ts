import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedLoginPage } from './role-based-login.page';

describe('RoleBasedLoginPage', () => {
  let component: RoleBasedLoginPage;
  let fixture: ComponentFixture<RoleBasedLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBasedLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBasedLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
