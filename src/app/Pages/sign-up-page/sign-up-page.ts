import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { StrongPasswordRegx } from '../regex';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
private formBuilder = inject(FormBuilder);

  signupForm = this.formBuilder.group(
    {
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegx), Validators.minLength(6)]],
      retypePassword: ['', Validators.required],
    },
    { validators: [SignUpPage.passwordsMatchValidator] } // attach the validator
  );

  // Validator to check equality of password fields only
  static passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const retype = control.get('retypePassword')?.value;

    if (password !== retype) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
    } else {
      console.log('Form invalid:', this.signupForm.errors);
    }
  }


}


