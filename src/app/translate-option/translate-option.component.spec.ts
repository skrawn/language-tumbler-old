import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateOptionComponent } from './translate-option.component';

describe('TranslateOptionComponent', () => {
  let component: TranslateOptionComponent;
  let fixture: ComponentFixture<TranslateOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
