import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiclistPage } from './dynamiclist.page';

describe('DynamiclistPage', () => {
  let component: DynamiclistPage;
  let fixture: ComponentFixture<DynamiclistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiclistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiclistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
