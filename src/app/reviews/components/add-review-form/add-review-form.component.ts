import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormElement } from '../../models';
import { DefinitionService } from '../../services/definition.service';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.scss']
})
export class AddReviewFormComponent implements OnInit {

  form?: FormGroup;
  formElements?: FormElement<string>[] = [];

  constructor(
    private definitionService: DefinitionService,
    private valuesService: ValuesService,
    public modalRef: MatDialogRef<AddReviewFormComponent>,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  async formInit(): Promise<void> {
    await this.definitionService.constructForm();

    this.formElements = this.definitionService.formElements;

    if (this.formElements) { 
      let form = this.definitionService.formGroup;
      if (form) { this.form = form; }
    } 
  }

  async submitForm(): Promise<void> {
    const success = await this.valuesService.saveReview(this.form?.value);

    if (success) { 
      this.modalRef.close(); 
      this.valuesService.getReviews(50);
    }
  }

}
