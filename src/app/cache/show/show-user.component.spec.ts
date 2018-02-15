import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ShowUsersComponent} from './show-users.component';
import {UserService} from '../user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShowUserComponent', () => {
  let component: ShowUsersComponent;
  let fixture: ComponentFixture<ShowUsersComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ShowUserComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`call 'User data' service`, async(() => {
    const expectedUsers = {
      id: 'TECHO1123',
      fullName: 'Ravi',
      project: 'DBS'
    };
    const userService = TestBed.get(UserService);
    userService.getAllUsers().subscribe((actualUsers) => {
       expect(userService).toBeDefined();
       expect(actualUsers.length).toBe(1);
       expect(expectedUsers).toEqual(actualUsers);
    });
  }));
});
