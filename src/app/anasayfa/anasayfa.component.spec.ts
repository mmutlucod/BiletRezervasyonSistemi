/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnasayfaComponent } from './anasayfa.component';

describe('AnasayfaComponent', () => {
  let component: AnasayfaComponent;
  let fixture: ComponentFixture<AnasayfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should have as title 'bilet'`, () => {
    const fixture = TestBed.createComponent(AnasayfaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bilet');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
