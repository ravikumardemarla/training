import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    this.loginForm.get('name').markAsTouched();
    this.loginForm.get('password').markAsTouched();
    if (this.loginForm.valid) {
      this.router.navigate(['/user']);
    } else {
      console.log(' Login form is in valide');
    }
  }

}
