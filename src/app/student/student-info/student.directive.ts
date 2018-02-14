import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {IStudentModel} from '../../model/student.model';


@Directive({
  selector: '[ccStudentInfo]'
})

export class StudentDirective implements OnChanges {
  @Input() public studentInfo: IStudentModel;

  constructor(private el: ElementRef) {

  }

  public ngOnChanges(): void {
    // console.log(' In directive student is ::  ', this.studentInfo);
    if (this.studentInfo.status === 'Fail') {
      this.el.nativeElement.style.color = 'red';
    }

    if (this.studentInfo.isTopper) {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
