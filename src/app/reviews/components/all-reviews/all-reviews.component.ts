import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ValuesService } from '../../services/values.service';
import { Review } from '../../interfaces';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit, OnDestroy {
  reviews?: Review[];

  unsubscribeSubject = new Subject<void>();


  constructor(
    private valueService: ValuesService
  ) { }

  ngOnInit(): void {
    this.valueService.reviews
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(res => {
        if (res) {
          this.reviews = res;
        }
    });

    this.valueService.getReviews(50);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next()
  }

}
