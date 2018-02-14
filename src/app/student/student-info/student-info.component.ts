import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validatePercentage, validateYear} from '../../validator/custom.validate';
import {IStudentModel} from '../../model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  public studentsData = [];
  public studentForm: FormGroup;
  public currentYear;

  constructor(private studentService: StudentService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9 ]+)$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      class: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$'), validateYear]],
      percentage: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$'), validatePercentage]]
    });
    this.currentYear = new Date().getFullYear() - 1;
    this.getStudentData();
  }

  public doValidate(): void {
    if (this.studentForm.valid) {
      console.log(' this.studentForm is valid', this.studentForm.value);
    } else {
      console.log(' this.studentForm is not valid', this.studentForm);
    }
  }

  public doReset(): void {
    this.studentForm.reset();
  }

  private getStudentData(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.studentsData = this.getStudentsInfo(data);
      // console.log('this.studentData :: ', this.studentsData);
    });
  }

  private getStudentsInfo(sd): Array<IStudentModel> {
    const studentsDetails: Array<IStudentModel> = [];

    for (let i = 0; i < sd.length; i++) {
      const studentInfo = {} as IStudentModel;
      // studentInfo = sd[i];
      studentInfo.rollNumber = sd[i].rollNumber;
      studentInfo.name = this.camelCase(sd[i].name);
      studentInfo.totalMarks = this.getTotalMarks(sd[i].marks);
      studentInfo.status = this.isStudentFail(sd[i].marks) ? 'Fail' : 'Pass';
      studentsDetails.push(studentInfo);
    }
    this.getTopperStudent(studentsDetails);
    return this.sortCollection(studentsDetails);
  }

  private camelCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getTopperStudent(sd): void {
    let topMarks = sd[0].totalMarks;
    let topperIndex = 0;
    for (let i = 1; i < sd.length; i++) {
      if (topMarks < sd[i].totalMarks) {
        topMarks = sd[i].totalMarks;
        topperIndex = i;
      }
    }
    sd[topperIndex].isTopper = true;
    sd[topperIndex].status = 'Topper';
  }

  private sortCollection(coll): Array<IStudentModel> {
    coll.sort((prev, next) => {
      if (prev.name.toLowerCase() < next.name.toLowerCase()) {
        return -1;
      }
      if (prev.name.toLowerCase() > next.name.toLowerCase()) {
        return 1;
      }
      if (prev.name.toLowerCase() === next.name.toLowerCase()) {
        return 0;
      }
    });

    return coll;
  }

  private isStudentFail(marks): boolean {
    let isFail: boolean;
    const keys = Object.keys(marks);
    for (let i = 0; i < keys.length; i++) {
      if (marks[keys[i]] < 20) {
        return isFail = true;
      }
    }
  }

  private getTotalMarks(marks): number {
    let total = 0;
    const keys = Object.keys(marks);
    for (let i = 0; i < keys.length; i++) {
      total += parseInt(marks[keys[i]], 10);
    }
    return total;
  }
}
