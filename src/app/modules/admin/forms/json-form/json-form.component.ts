import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

// export interface StepType {
//     label: string;
//     fields: FormlyFieldConfig[];
// }
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {

    form: FormGroup;
    model: any;
    options: FormlyFormOptions;
    fields: FormlyFieldConfig[];

    jsonData: any = {};

    type: string;

    forms = [
        'stepper'
    ];

    constructor(private formlyJsonschema: FormlyJsonschema) {
        this.loadJSON();
        this.loadStepper(this.jsonData);
    }

    // fields = [this.formlyJsonschema.toFieldConfig({
    //     'title': 'formlyJsonschema',
    //     'type': 'object',
    //     'properties': {
    //         'firstname': {
    //             'type': 'string',
    //             'title': 'First name'
    //         },
    //         'lastname': {
    //             'type': 'string',
    //             'title': 'Last name'
    //         }
    //     }
    // })];

    loadStepper(jsonData): any {
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(jsonData.schema)];
        this.model = {};
    }

    loadJSON(): any {
        this.jsonData = {
            schema: {
                title: 'Stepper Form',
                type: 'object',
                widget: { formlyConfig: { type: 'stepper'} },
                properties: {
                    step1: {
                        title: 'Einrichtung anlegen',
                        type: 'object',
                        properties: {
                            firstname: {
                                type: 'textarea',
                                title: 'First Name',
                                widget: {
                                    formlyConfig: {
                                        templateOptions: {
                                            maxWordCount: 1,
                                            rows: 5
                                        }
                                    }
                                }
                            },
                            id: {
                                $id: '#/properties/ip',
                                type: 'string',
                                title: 'Ip',
                                default: '',
                                example: [
                                    '111.123.789.654'
                                ],
                                pattern: '^(\\\\d{1,3}\\\\.){3}\\\\d{1,3}$',
                                widget: {
                                    formlyConfig: {
                                        validation: {
                                            messages: {
                                                pattern: 'test'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    step2: {
                        title: 'Bestellen',
                        type: 'object',
                        properties: {
                            firstname: {
                                type: 'textarea',
                                title: 'First Name',
                                widget: {
                                    formlyConfig: {
                                        templateOptions: {
                                            maxWordCount: 1,
                                            rows: 5
                                        }
                                    }
                                }
                            },
                            id: {
                                $id: '#/properties/ip',
                                type: 'string',
                                title: 'Ip',
                                default: '',
                                example: [
                                    '111.123.789.654'
                                ],
                                pattern: '^(\\\\d{1,3}\\\\.){3}\\\\d{1,3}$',
                                widget: {
                                    formlyConfig: {
                                        validation: {
                                            messages: {
                                                pattern: 'test'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    step3: {
                        title: 'step 3',
                        type: 'object',
                        properties: {
                            lastname: {
                                type: 'string',
                                title: 'Last name'
                            }
                        }
                    }
                }
            }
        };
    }

    submit(): any {
        alert(JSON.stringify(this.model));
    }
}
