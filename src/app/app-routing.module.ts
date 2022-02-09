import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReviewsComponent } from './reviews/components/all-reviews/all-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: AllReviewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
