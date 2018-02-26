import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should 'loginForm' is invalid`, () => {
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it(`should 'loginForm' valid navigate to user screen`, () => {
    const router = TestBed.get(Router);
    expect(component.loginForm.invalid).toBeTruthy();
    component.loginForm.get('name').setValue('ravi');
    component.loginForm.get('password').setValue('123');
    expect(component.loginForm.valid).toBeTruthy();
    const call = spyOn(router, 'navigate');
    component.onSubmit();
    expect(call.calls.first().args[0]).toEqual(['/user']);
  });
});
