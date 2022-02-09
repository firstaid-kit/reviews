import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from '../../models';

@Component({
  selector: 'app-review-form-element',
  templateUrl: './review-form-element.component.html',
  styleUrls: ['./review-form-element.component.scss']
})
export class ReviewFormElementComponent implements OnInit {
  @Input() element!: FormElement<string>;
  @Input() form!: FormGroup;
  
  get isValid() { return this.form.controls[this.element.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
