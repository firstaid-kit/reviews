import { Component, Input, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit {
  @Input() mediaType?: string;
  @Input() title?: string;
  @Input() creator?: string;
  @Input() reviewComments?: string;
  @Input() starRating?: number;
  @Input() createdDatetime?: string;
  @Input() id?: number;

  constructor(
    private valueService: ValuesService
  ) { }

  ngOnInit(): void { }

  async deleteReview(): Promise<void> {
    this.valueService.deleteReview(this.id!);
    this.valueService.getReviews(50);
  }

}
