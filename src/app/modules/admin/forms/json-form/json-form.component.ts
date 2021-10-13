import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

export interface StepType {
    label: string;
    fields: FormlyFieldConfig[];
}
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};

    fields = [this.formlyJsonschema.toFieldConfig({
        'title': 'Test',
        'type': 'object',
        'properties': {
            'firstname': {
                'type': 'string',
                'title': 'First name'
            },
            'lastname': {
                'type': 'string',
                'title': 'Last name'
            }
        }
    })];

    constructor(private formlyJsonschema: FormlyJsonschema) {}


    submit(): any {
        alert(JSON.stringify(this.model));
    }
}
