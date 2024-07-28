/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecimComponent } from './secim.component';

describe('SecimComponent', () => {
  let component: SecimComponent;
  let fixture: ComponentFixture<SecimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
it(`should have as title 'bilet'`, () => {
  const fixture = TestBed.createComponent(SecimComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('bilet');
});