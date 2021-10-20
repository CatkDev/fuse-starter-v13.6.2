import { Route } from '@angular/router';
// import { FormComponent } from './form/form.component';
import { JsonFormComponent } from './json-form/json-form.component';

export const formsRoutes: Route[] = [
    {
        path     : '',
        component: JsonFormComponent
    }
];
