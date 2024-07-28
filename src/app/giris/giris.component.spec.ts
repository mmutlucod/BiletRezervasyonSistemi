/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GirisComponent } from './giris.component';

describe('GirisComponent', () => {
  let component: GirisComponent;
  let fixture: ComponentFixture<GirisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
