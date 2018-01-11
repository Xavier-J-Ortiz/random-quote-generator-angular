import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWhyComponent } from './the-why.component';

describe('TheWhyComponent', () => {
  let component: TheWhyComponent;
  let fixture: ComponentFixture<TheWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
