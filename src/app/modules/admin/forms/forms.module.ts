import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { formsRoutes } from './forms.routing';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule  } from '@ngx-formly/material';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyFieldStepper } from './stepper.type';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ObjectTypeComponent } from './object.type';
import { NullTypeComponent } from './null.type';
import { MultiSchemaTypeComponent } from './multischema.type';
import { ArrayTypeComponent } from './array.type';
import { FlexFormComponent } from './flex-form/flex-form.component';
import { JsonFormComponent } from './json-form/json-form.component';


export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
    return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
    return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
    return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(err, field: FormlyFieldConfig) {
    return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(err, field: FormlyFieldConfig) {
    return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
    return `should be equal to constant "${field.templateOptions.const}"`;
}

@NgModule({
    declarations: [
        FormComponent,
        FormlyFieldStepper,
        RegistrationFormComponent,
        ObjectTypeComponent,
        NullTypeComponent,
        MultiSchemaTypeComponent,
        ArrayTypeComponent,
        FlexFormComponent,
        JsonFormComponent,
    ],
    imports: [
        RouterModule.forChild(formsRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        FormlyModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'Dieses Feld muss ausgefüllt werden'},
                { name: 'null', message: 'should be null' },
                { name: 'minlength', message: minlengthValidationMessage },
                { name: 'maxlength', message: maxlengthValidationMessage },
                { name: 'min', message: minValidationMessage },
                { name: 'max', message: maxValidationMessage },
                { name: 'multipleOf', message: multipleOfValidationMessage },
                { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
                { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
                { name: 'minItems', message: minItemsValidationMessage },
                { name: 'maxItems', message: maxItemsValidationMessage },
                { name: 'uniqueItems', message: 'should NOT have duplicate items' },
                { name: 'const', message: constValidationMessage },
            ],
            types: [
                { name: 'stepper', component: FormlyFieldStepper, wrappers: ['form-field'] },
                { name: 'string', extends: 'input' },
                {
                    name: 'number',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number',
                        },
                    },
                },
                {
                    name: 'integer',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number',
                        },
                    },
                },
                { name: 'boolean', extends: 'checkbox' },
                { name: 'enum', extends: 'select' },
                { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
                { name: 'array', component: ArrayTypeComponent },
                { name: 'object', component: ObjectTypeComponent },
                { name: 'multischema', component: MultiSchemaTypeComponent },
            ],
        }),
        FormlyMaterialModule,
        MatStepperModule
    ]
})
export class FormsModule
{
}
