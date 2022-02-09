import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormElementComponent } from './review-form-element.component';

describe('ReviewFormElementComponent', () => {
  let component: ReviewFormElementComponent;
  let fixture: ComponentFixture<ReviewFormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewFormElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
