import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/IUser.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { AuthValidator } from 'src/app/validators/auth.validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  form!: FormGroup;
  formSubmitted = false;

  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      mobileno: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
    }, [AuthValidator.passwordNotMatched])
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.addUser(this.getUser());
    this.formSubmitted = false;
    this.form.reset();

    this.snackbarService.openSnackbar('User Registered Successfully', 'Close', 2000, 'success');
  }

  addUser(user: IUser) {
    this.userService.addUsers(user);
  }

  getUser(): IUser {
    return {
      name: this.name?.value,
      email: this.email?.value,
      password: this.password?.value,
      mobileno: this.mobileno?.value
    }
  }

  get isFormValid() {
    return this.form.valid;
  }

  get name() {
    return this.form.get('name') as FormControl
  }

  get email() {
    return this.form.get('email') as FormControl
  }

  get password() {
    return this.form.get('password') as FormControl
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl
  }

  get mobileno() {
    return this.form.get('mobileno') as FormControl
  }

}