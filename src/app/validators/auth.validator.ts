import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AuthValidator {
    static passwordNotMatched(group: AbstractControl): ValidationErrors | null {

        const password = group.get('password');
        const confirmPassword = group.get('confirmPassword');

        if (
            password.valid &&
            confirmPassword.valid &&
            password.value !== confirmPassword.value
        ) {
            confirmPassword.setErrors({ passwordNotMatched: true })
            return { passwordNotMatched: true }
        }

        confirmPassword.setErrors(null)

        return null
    }
}