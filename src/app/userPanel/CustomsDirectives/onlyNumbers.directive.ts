import { Directive, HostListener, Input, Inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Directive({
  selector: '[onlyNumbers]',
})
export class OnlyNumbersDirective {
  @Input('notification') notification: string | undefined;
  // custom the position of Snack Bar
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const originalValue = input.value;

    input.value = originalValue.replace(/[^0-9]/g, '');

    if (input.value !== originalValue) {
      if (this.notification) {
        this.snackBar.open(this.notification, 'Close', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['notify-snackbar'],
        });
      }
    }
  }
}
