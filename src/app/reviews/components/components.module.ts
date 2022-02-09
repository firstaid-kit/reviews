import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AddReviewFormComponent } from './add-review-form/add-review-form.component';
import { ReviewFormElementComponent } from './review-form-element/review-form-element.component';
import { SingleReviewComponent } from './single-review/single-review.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';



@NgModule({
  declarations: [
    AddReviewFormComponent,
    ReviewFormElementComponent,
    SingleReviewComponent,
    AllReviewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ReviewFormElementComponent,
    AddReviewFormComponent,
    AllReviewsComponent,
  ]
})
export class ComponentsModule { }
