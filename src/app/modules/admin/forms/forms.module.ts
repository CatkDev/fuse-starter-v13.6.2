import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { FormComponent } from './form.component';
import { formsRoutes } from './forms.routing';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule  } from '@ngx-formly/material';
import { MatStepperModule } from '@angular/material/stepper';
import { FormlyFieldStepper } from './stepper.type';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
    declarations: [
        FormComponent,
        FormlyFieldStepper,
        RegistrationFormComponent
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
            ],
            types: [
                { name: 'stepper', component: FormlyFieldStepper, wrappers: [] },
            ],
        }),
        FormlyMaterialModule,
        MatStepperModule
    ]
})
export class FormsModule
{
}
