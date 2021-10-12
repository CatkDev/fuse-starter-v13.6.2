import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-stepper',
    template: `
        <mat-horizontal-stepper>
            <mat-step
                    *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
                <ng-template matStepLabel>{{ step.templateOptions.label }}</ng-template>
                <formly-field [field]="step"></formly-field>

                <div>
                    <div class="flex justify-end">
                        <button *ngIf="index !== 0"
                                matStepperPrevious
                                mat-flat-button
                                color="accent"
                                class="px-8 mr-2"
                                type="button">
                            Back
                        </button>
                        <button *ngIf="!last"
                                matStepperNext
                                mat-flat-button
                                class="px-8"
                                color="primary"
                                type="button"
                                [disabled]="!isValid(step)">
                            Next
                        </button>
                        <button *ngIf="last"
                                class="px-8"
                                mat-flat-button
                                [disabled]="!form.valid"
                                color="primary"
                                type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </mat-step>
        </mat-horizontal-stepper>
    `,
})



// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldStepper extends FieldType {

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    isValid(field: FormlyFieldConfig) {
        if (field.key) {
            return field.formControl.valid;
        }

        return field.fieldGroup.every(f => this.isValid(f));
    }
}
