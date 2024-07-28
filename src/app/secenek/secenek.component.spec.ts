/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecenekComponent } from './secenek.component';

describe('SecenekComponent', () => {
  let component: SecenekComponent;
  let fixture: ComponentFixture<SecenekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecenekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecenekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
