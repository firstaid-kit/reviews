import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { environment as env } from 'src/environments/environment';
import { DropdownInput, FormElement, TextareaInput, TextInput, NumberInput } from '../models';
import { DefinitionResult, ReviewDefinition, Input } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class DefinitionService {
  serverUrl = 'https://in-shepherd-61.hasura.app/v1/graphql';

  formDefinition?: ReviewDefinition;
  formElements?: FormElement<string>[];
  formGroup?: FormGroup;

  constructor(
    private http: HttpClient,
  ) {  }

  async constructForm(): Promise<void> {
    this.formDefinition = await this.getAddReviewFormDefinition();
    this.formElements = this.getFormElements(this.formDefinition.data.inputs);
    this.formGroup = this.toFormGroup();
  }

  async getAddReviewFormDefinition(): Promise<ReviewDefinition> {
    const query = {
      query: `query {
        add_review_definition(where: {id: {_eq: 1}}) {
          id
          name
          data
        }
      }`
    };

    const options = {
      headers: {
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      }
    }

    const result: DefinitionResult = await this.http.post(this.serverUrl, query, options).toPromise();

    if (result.data) {
      return result.data.add_review_definition[0];
    }

    throw new Error("Oh no! Could not fetch definition!");
  }

  getFormElements(inputs: Input[]): FormElement<string>[] {
    let elements: FormElement<string>[] = [];

    for (let i of inputs) {
      if (i.type === 'dropdown') {
        elements.push(new DropdownInput({
          key: i.key,
          label: i.label,
          options: i.options,
          type: i.type,
          order: i.order
        }));
      } else if (i.type === 'text') {
        elements.push(new TextInput({
          key: i.key,
          label: i.label,
          value: i.value,
          order: i.order,
          type: i.type
        }));
      } else if (i.type === 'textarea') {
        elements.push(new TextareaInput({
          key: i.key,
          label: i.label,
          order: i.order,
          type: i.type
        }))
      }
      else if (i.type === 'number') {
        elements.push(new NumberInput({
          key: i.key,
          label: i.label,
          order: i.order,
          type: i.type
        }));
      }
    }

    elements = elements.sort((a, b) => a.order - b.order)

    return elements;
  }

  toFormGroup(): FormGroup {
    const group: any = {};

    this.formElements?.forEach(el => {
      group[el.key] = new FormControl(el.value || '');
    });

    return new FormGroup(group);
  }
}
