import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentInfoComponent} from './student-info/student-info.component';
import {CommonModule} from '@angular/common';
import {StudentService} from './student.service';
import {STUDENT_ROUTES} from './student-routings';
import {StudentDirective} from './student-info/student.directive';


@NgModule({
  declarations: [StudentInfoComponent, StudentDirective],
  imports: [ReactiveFormsModule, CommonModule, STUDENT_ROUTES],
  providers: [StudentService]
})

export class StudentModule {
}
