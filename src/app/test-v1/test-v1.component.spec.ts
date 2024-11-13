import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestV1Component } from './TestV1Component';

describe('TestV1Component', () => {
  let component: TestV1Component;
  let fixture: ComponentFixture<TestV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestV1Component]
    });
    fixture = TestBed.createComponent(TestV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
