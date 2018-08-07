import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOTCharacterComponent } from './gotcharacter.component';

describe('GOTCharacterComponent', () => {
  let component: GOTCharacterComponent;
  let fixture: ComponentFixture<GOTCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOTCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOTCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
