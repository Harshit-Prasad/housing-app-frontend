import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    })
  }

  onSubmit() {
    let token = this.authService.login(this.form.getRawValue());

    if (token) {
      localStorage.setItem('Token', JSON.stringify(token));
      this.snackbarService.openSnackbar('Login successful', 'Close', 2000, 'success');
    } else {
      this.snackbarService.openSnackbar('Login failed, please register', 'Close', 2000, 'error');
    }

  }

  get isFormValid() {
    return this.form.valid;
  }

}
