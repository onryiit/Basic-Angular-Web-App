import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPage1Component } from './new-page1.component';

describe('NewPage1Component', () => {
  let component: NewPage1Component;
  let fixture: ComponentFixture<NewPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPage1Component]
    });
    fixture = TestBed.createComponent(NewPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
