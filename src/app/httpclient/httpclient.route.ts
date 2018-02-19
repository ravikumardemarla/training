import { Routes, RouterModule } from "@angular/router";
import { HttpclientComponent } from "./httpclient.component";

const HTTP_CLIENT_ROUTE: Routes = [
    {
        path: '',
        component: HttpclientComponent
    }
]

export const HTTP_CLIENT_ROUTES = RouterModule.forChild(HTTP_CLIENT_ROUTE);
