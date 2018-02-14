import {RouterModule, Routes} from '@angular/router';
import {StudentInfoComponent} from './student-info/student-info.component';

const STUDENT_ROUTING: Routes = [
  {path: '', component: StudentInfoComponent}
];

export const STUDENT_ROUTES = RouterModule.forChild(STUDENT_ROUTING);
