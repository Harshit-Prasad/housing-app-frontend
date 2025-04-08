import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  openSnackbar(message: string, action: string, duration: number = 2000, type: string = '') {
    const panelClass = {
      success: 'snackbar-success',
      error: 'snackbar-error',
    }

    this.snackBar.open(message, action, {
      duration: duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [panelClass[type]]
    });
  }

}
