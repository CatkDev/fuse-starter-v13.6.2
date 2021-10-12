import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';


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
                templateOptions: {label: 'Einrichtung anlegen'},
                fieldGroup: [
                    {
                        key: 'objectName',
                        type: 'input',
                        templateOptions: {
                            label: 'Name Einrichtung',
                            required: true,
                        },
                    },
                    {
                        key: 'objectShort',
                        type: 'input',
                        templateOptions: {
                            label: 'Kurzbezeichnung',
                            required: false,
                        },
                    },
                    {
                        key: 'objectId',
                        type: 'input',
                        templateOptions: {
                            type: 'number',
                            label: 'Objektnummer',
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

    jsonData: any;

    constructor(private formlyJsonschema: FormlyJsonschema) {

    }

    ngOnInit(): void {
    }

    submit(): void {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    loadForm(jsonData): any {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(jsonData.schema)];
        this.model = jsonData.model;
    }

    loadJSON(): any {
        this.jsonData = {
            schema: {
                title: 'A registration form',
                description: 'A simple form example.',
                type: 'object',
                required: [
                    'firstName',
                    'lastName'
                ],
                properties: {
                    firstName: {
                        type: 'string',
                        title: 'First name',
                        default: 'Chuck'
                    },
                    lastName: {
                        type: 'string',
                        title: 'Last name'
                    },
                    age: {
                        type: 'integer',
                        title: 'Age'
                    },
                    bio: {
                        type: 'string',
                        title: 'Bio'
                    },
                    password: {
                        type: 'string',
                        title: 'Password',
                        minLength: 3
                    },
                    telephone: {
                        type: 'string',
                        title: 'Telephone',
                        minLength: 10
                    }
                }
            },
            model: {
                lastName: 'Norris',
                age: 75,
                bio: 'Roundhouse kicking asses since 1940',
                password: 'noneed'
            }
        };
    }

}


