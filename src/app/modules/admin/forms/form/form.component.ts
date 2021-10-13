import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormlyJsonschema} from '@ngx-formly/core/json-schema';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
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
                fieldGroupClassName: 'display-flex',
                fieldGroup: [
                    {
                        className: 'flex-1',
                        key: 'objectName',
                        type: 'input',
                        templateOptions: {
                            label: 'Name Einrichtung',
                            required: true,
                        },
                    },
                    {
                        className: 'flex-1',
                        key: 'objectShort',
                        type: 'input',
                        templateOptions: {
                            label: 'Kurzbezeichnung',
                            required: false,
                        },
                    },
                    {
                        className: 'flex-1',
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

    // loadForm(jsonData): any {
    //     this.form = new FormGroup({});
    //     this.options = {};
    //     this.fields = [this.formlyJsonschema.toFieldConfig(jsonData.schema)];
    //     this.model = {};
    // }

    // loadJSON(): any {
    //     this.jsonData = {
    //         schema: {
    //             'type': 'stepper',
    //             'fieldGroup': [
    //                 {
    //                     'templateOptions': {'label': 'Einrichtung anlegen'},
    //                     'fieldGroupClassName': 'display-flex',
    //                     'fieldGroup': [
    //                         {
    //                             'className': 'flex-1',
    //                             'key': 'objectName',
    //                             'type': 'input',
    //                             'templateOptions': {
    //                                 'label': 'Name Einrichtung',
    //                                 'required': true
    //                             }
    //                         },
    //                         {
    //                             'className': 'flex-1',
    //                             'key': 'objectShort',
    //                             'type': 'input',
    //                             'templateOptions': {
    //                                 'label': 'Kurzbezeichnung',
    //                                 'required': false
    //                             }
    //                         },
    //                         {
    //                             'className': 'flex-1',
    //                             'key': 'objectId',
    //                             'type': 'input',
    //                             'templateOptions': {
    //                                 'type': 'number',
    //                                 'label': 'Objektnummer',
    //                                 'required': true
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'templateOptions': {'label': 'Lokalisierung'},
    //                     'fieldGroup': [
    //                         {
    //                             'key': 'country',
    //                             'type': 'input',
    //                             'templateOptions': {
    //                                 'label': 'Land',
    //                                 'required': true
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'templateOptions': {'label': 'Tag der Reise'},
    //                     'fieldGroup': [
    //                         {
    //                             'key': 'day',
    //                             'type': 'input',
    //                             'templateOptions': {
    //                                 'type': 'date',
    //                                 'label': 'Datum',
    //                                 'required': true
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     };
    // }

}


