import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewFormComponent } from 'src/app/reviews/components/add-review-form/add-review-form.component';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addReview(): void {
    this.dialog.open(AddReviewFormComponent, {
      // disableClose: false,
      height: '530px',
      width: '450px',
    })
  }

}
