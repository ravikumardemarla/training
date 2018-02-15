import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserComponent} from './user.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`component created`, async(() => {
    expect(component).toBeDefined();
  }));

  it(`call 'User Data service` , async(() => {
    const expectedUsers = {
      id: 'TECHO1124',
      fullName: 'Kumar',
      project: 'DBS'
    };
    const userService = TestBed.get(UserService);
    userService.getAllUsers().subscribe((actualUsers) => {
        expect(userService).toBeDefined();
        expect(actualUsers.length).toBe(1);
        expect(expectedUsers).toEqual(actualUsers);
    });
  }));

  it(`call service from ngOnIt()`, async(() => {
    const expectedUsers = {
      id: 'TECHO1124',
      fullName: 'Kumar',
      project: 'DBS'
    };
    const userService = TestBed.get(UserService);
    // const spy = spyOn(userService, 'getAllUsers').and.returnValue(Observable.of(Array));
    component.ngOnInit();
    expect(userService).toBeDefined();
    /*spy.calls.mostRecent().returnValue.then(() => {

    });*/
    expect(component.userData.length).toBe(0);
  }));
});
