import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [{
        type: 'stepper',
        fieldGroup: [
            {
                templateOptions: {label: 'Zur Person'},
                fieldGroup: [
                    {
                        key: 'firstname',
                        type: 'input',
                        templateOptions: {
                            label: 'Vorname',
                            required: true,
                        },
                    },
                    {
                        key: 'age',
                        type: 'input',
                        templateOptions: {
                            type: 'number',
                            label: 'Alter',
                            required: true,
                        },
                    },
                ],
            },
            {
                templateOptions: {label: 'Lokalisierung'},
                fieldGroup: [
                    {
                        key: 'country',
                        type: 'input',
                        templateOptions: {
                            label: 'Land',
                            required: true,
                        },
                    },
                ],
            },
            {
                templateOptions: {label: 'Tag der Reise'},
                fieldGroup: [
                    {
                        key: 'day',
                        type: 'input',
                        templateOptions: {
                            type: 'date',
                            label: 'Datum',
                            required: true,
                        },
                    },
                ],
            },
        ],
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

    submit(): void {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

}


