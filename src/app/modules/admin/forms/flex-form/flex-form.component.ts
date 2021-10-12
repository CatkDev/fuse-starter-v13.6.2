import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
    selector: 'app-flex-form',
    templateUrl: './flex-form.component.html',
    styleUrls: ['./flex-form.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FlexFormComponent {
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

    constructor(private formlyJsonschema: FormlyJsonschema) {
    }

    // fields: FormlyFieldConfig[] = [
    //     {
    //         fieldGroupClassName: 'display-flex',
    //         fieldGroup: [
    //             {
    //                 className: 'flex-1',
    //                 type: 'input',
    //                 key: 'firstName',
    //                 templateOptions: {
    //                     label: 'First Name',
    //                 },
    //             },
    //             {
    //                 className: 'flex-1',
    //                 type: 'input',
    //                 key: 'lastName',
    //                 templateOptions: {
    //                     label: 'Last Name',
    //                 },
    //                 expressionProperties: {
    //                     'templateOptions.disabled': '!model.firstName',
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         template: '<hr /><div><strong>Address:</strong></div>',
    //     },
    //     {
    //         fieldGroupClassName: 'display-flex',
    //         fieldGroup: [
    //             {
    //                 className: 'flex-2',
    //                 type: 'input',
    //                 key: 'street',
    //                 templateOptions: {
    //                     label: 'Street',
    //                 },
    //             },
    //             {
    //                 className: 'flex-1',
    //                 type: 'input',
    //                 key: 'cityName',
    //                 templateOptions: {
    //                     label: 'City',
    //                 },
    //             },
    //             {
    //                 className: 'flex-1',
    //                 type: 'input',
    //                 key: 'zip',
    //                 templateOptions: {
    //                     type: 'number',
    //                     label: 'Zip',
    //                     max: 99999,
    //                     min: 0,
    //                     pattern: '\\d{5}',
    //                 },
    //             },
    //         ],
    //     },
    //     {
    //         template: '<hr />',
    //     },
    //     {
    //         type: 'input',
    //         key: 'otherInput',
    //         templateOptions: {
    //             label: 'Other Input',
    //         },
    //     },
    //     {
    //         type: 'checkbox',
    //         key: 'otherToo',
    //         templateOptions: {
    //             label: 'Other Checkbox',
    //         },
    //     },
    // ];

    submit(): any {
        alert(JSON.stringify(this.model));
    }
}
