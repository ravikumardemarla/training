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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call 'student service'`, async(() => {
    const studentService = TestBed.get(StudentService);
    expect(studentService).toBeDefined();
    const expected = {
      name: 'ravi',
      rollNumber: '1233-5A',
      marks: {
        maths: '30',
        science: '40',
      }
    };

    studentService.getStudents().subscribe((actual) => {
      expect(actual.length).toBe(1);
      expect(expected).toEqual(actual);
    });
  }));
});
