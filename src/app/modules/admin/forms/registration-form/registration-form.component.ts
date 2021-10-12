import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

    form: FormGroup;
    model: any;
    options: FormlyFormOptions;
    fields: FormlyFieldConfig[];

    jsonData: any = {};

    type: string;
    examples = [
        'simple'
    ];

    constructor(private formlyJsonschema: FormlyJsonschema
                ) {
        this.loadJSON();
        this.loadExample(this.jsonData);
    }

    ngOnInit(): void {
    }


    loadExample(jsonData): any {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(jsonData.schema)];
        this.model = jsonData.model;
        // console.log(this.fields);
        // this.http.get<any>(`assets/json-forms/${type}.json`).pipe(
        //     tap(({ schema, model }) => {
        //         this.type = type;
        //         this.form = new FormGroup({});
        //         this.options = {};
        //         this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        //         this.model = model;
        //     }),
        // ).subscribe();
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

    submit(): any {
        alert(JSON.stringify(this.model));
    }

}
