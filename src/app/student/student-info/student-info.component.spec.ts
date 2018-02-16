import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentInfoComponent} from './student-info.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StudentService} from '../student.service';
import {NumberOnlyDirective} from '../../directive/numberOnly.directive';
import {StudentDirective} from './student.directive';
import {ReactiveFormsModule} from '@angular/forms';

describe('StudentComponent', () => {
  let component: StudentInfoComponent;
  let fixture: ComponentFixture<StudentInfoComponent>;
  let expectStudentsInfo = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInfoComponent, NumberOnlyDirective, StudentDirective],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [StudentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    expectStudentsInfo = [
      {
        'name': 'rajiv',
        'marks': {
          'Maths': '18',
          'English': '21',
          'Science': '45'
        },
        'rollNumber': 'KV2017-5A2'
      },
      {
        'name': 'abhishek',
        'marks': {
          'Maths': '43',
          'English': '30',
          'Science': '37'
        },
        'rollNumber': 'KV2017-5A1'
      }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call 'student service'`, async(() => {
    const studentService = TestBed.get(StudentService);
    expect(studentService).toBeDefined();
    component.ngOnInit();
    studentService.getStudents().subscribe((actual) => {
      expect(actual.length).toBe(2);
      expect(expectStudentsInfo).toEqual(actual);
    });
  }));

  it(`should 'Student form' is invalid`, async(() => {
    expect(component.studentForm.invalid).toBeTruthy();
  }));

  it(`should 'Student form' is valid`, async(() => {
    component.studentForm.get('name').setValue('Ravi Kumar 123');
    component.studentForm.get('lastName').setValue('Ravi Kumar');
    component.studentForm.get('class').setValue('12B');
    component.studentForm.get('year').setValue('2016');
    component.studentForm.get('percentage').setValue('68');
    expect(component.studentForm.valid).toBeTruthy();
  }));

});
