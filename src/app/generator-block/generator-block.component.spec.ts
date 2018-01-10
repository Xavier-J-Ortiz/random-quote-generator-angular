import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBlockComponent } from './generator-block.component';

describe('GeneratorBlockComponent', () => {
  let component: GeneratorBlockComponent;
  let fixture: ComponentFixture<GeneratorBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
