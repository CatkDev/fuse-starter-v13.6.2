import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
    options = {};
    model: any = {};
    fields: FormlyFieldConfig[];

    jsonData: any = {};

    constructor(private formlyJsonschema: FormlyJsonschema,
                private http: HttpClient) {
        //this.loadStepperJSON();
        // this.jsonData = this.loadExample();
        // this.jsonData = {
        //     schema: {
        //         type: 'stepper',
        //         fieldGroup: [
        //             // step 1
        //             {
        //                 templateOptions: { label: 'Step 1' },
        //                 fieldGroup: [
        //                     {
        //                         key: 'firstname',
        //                         type: 'input',
        //                         templateOptions: {
        //                             label: 'First name',
        //                             required: true
        //                         }
        //                     },
        //                     {
        //                         key: 'age',
        //                         type: 'input',
        //                         templateOptions: {
        //                             type: 'number',
        //                             label: 'Age',
        //                             required: true
        //                         }
        //                     }
        //                 ]
        //             },
        //             // step 2
        //             {
        //                 templateOptions: { label: 'Step 2' },
        //                 fieldGroup: [
        //                     {
        //                         key: 'country',
        //                         type: 'input',
        //                         templateOptions: {
        //                             label: 'Country',
        //                             required: true
        //                         }
        //                     }
        //                 ]
        //             },
        //             // step 3
        //             {
        //                 templateOptions: { label: 'Step 3' },
        //                 fieldGroup: [
        //                     {
        //                         key: 'day',
        //                         type: 'input',
        //                         templateOptions: {
        //                             label: 'Day of the trip',
        //                             required: true
        //                         }
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // };

        // this.loadTestJSON();
        // this.loadJSON();
        //this.loadStepper(this.jsonData);
        this.loadExample();
        // this.jsonData = [this.jsonData];
        // this.fields = this.jsonData;
        // this.fields = this.jsonData.schema;
    }

    // loadStepper(jsonData): any {
    //     this.form = new FormGroup({});
    //     this.options = {};
    //     this.fields = [this.formlyJsonschema.toFieldConfig(jsonData.schema)];
    //     this.model = {};
    //     console.log(jsonData.schema);
    //     console.log(this.jsonData.schema);
    // }

    loadExample(): any {
        this.jsonData = this.http.get<any>('assets/json-schema/stepperForm.json').subscribe((data) => {
            this.fields = [data];

            // this.fields = [this.formlyJsonschema.toFieldConfig(data)];
            console.log(data);
        });
    }

    // loadTestJSON(): any {
    //     this.jsonData = {
    //         schema: {
    //             type: 'stepper',
    //             fieldGroup: [
    //                 // step 1
    //                 {
    //                     key: 'Step1',
    //                     templateOptions: { label: 'Step 1' },
    //                     fieldGroup: [
    //                         {
    //                             key: 'input',
    //                             type: 'input',
    //                             templateOptions: {
    //                                 label: 'Input',
    //                                 placeholder: 'Input placeholder',
    //                                 required: true
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     };
    // }

    // loadStepperJSON(): any {
    //     this.jsonData = {
    //         schema: {
    //             type: 'stepper',
    //             fieldGroup: [
    //                 // step 1
    //                 {
    //                     templateOptions: { label: 'Step 1' },
    //                     fieldGroup: [
    //                         {
    //                             key: 'firstname',
    //                             type: 'input',
    //                             templateOptions: {
    //                                 label: 'First name',
    //                                 required: true
    //                             }
    //                         },
    //                         {
    //                             key: 'age',
    //                             type: 'input',
    //                             templateOptions: {
    //                                 type: 'number',
    //                                 label: 'Age',
    //                                 required: true
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 // step 2
    //                 {
    //                     templateOptions: { label: 'Step 2' },
    //                     fieldGroup: [
    //                         {
    //                             key: 'country',
    //                             type: 'input',
    //                             templateOptions: {
    //                                 label: 'Country',
    //                                 required: true
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 // step 3
    //                 {
    //                     templateOptions: { label: 'Step 3' },
    //                     fieldGroup: [
    //                         {
    //                             key: 'day',
    //                             type: 'input',
    //                             templateOptions: {
    //                                 label: 'Day of the trip',
    //                                 required: true
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     };
    // }

    // loadJSON(): any {
    //     this.jsonData = {
    //         schema: {
    //             title: 'Stepper Form',
    //             type: 'object',
    //             widget: { formlyConfig: { type: 'stepper'} },
    //             properties: {
    //                 step1: {
    //                     title: 'Einrichtung anlegen',
    //                     type: 'object',
    //                     properties: {
    //                         firstname: {
    //                             type: 'textarea',
    //                             title: 'First Name',
    //                             widget: {
    //                                 formlyConfig: {
    //                                     templateOptions: {
    //                                         maxWordCount: 1,
    //                                         rows: 5
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                         id: {
    //                             $id: '#/properties/ip',
    //                             type: 'string',
    //                             title: 'Ip',
    //                             default: '',
    //                             example: [
    //                                 '111.123.789.654'
    //                             ],
    //                             pattern: '^(\\\\d{1,3}\\\\.){3}\\\\d{1,3}$',
    //                             widget: {
    //                                 formlyConfig: {
    //                                     validation: {
    //                                         messages: {
    //                                             pattern: 'test'
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 },
    //                 step2: {
    //                     title: 'Bestellen',
    //                     type: 'object',
    //                     properties: {
    //                         firstname: {
    //                             type: 'textarea',
    //                             title: 'First Name',
    //                             widget: {
    //                                 formlyConfig: {
    //                                     templateOptions: {
    //                                         maxWordCount: 1,
    //                                         rows: 5
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                         id: {
    //                             $id: '#/properties/ip',
    //                             type: 'string',
    //                             title: 'Ip',
    //                             default: '',
    //                             example: [
    //                                 '111.123.789.654'
    //                             ],
    //                             pattern: '^(\\\\d{1,3}\\\\.){3}\\\\d{1,3}$',
    //                             widget: {
    //                                 formlyConfig: {
    //                                     validation: {
    //                                         messages: {
    //                                             pattern: 'test'
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 },
    //                 step3: {
    //                     title: 'step 3',
    //                     type: 'object',
    //                     properties: {
    //                         lastname: {
    //                             type: 'string',
    //                             title: 'Last name'
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     };
    // }

    submit(): any {
        alert(JSON.stringify(this.model));
    }
}
