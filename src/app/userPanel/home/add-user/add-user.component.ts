import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getUser } from '../../store/User.Selectors';
import { user } from '../../model/user';
import { adduser } from './../../store/User.Action';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  title = 'Create New User!';
  isSubmitted = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  notification: string = 'User Added Successfully!';

  newUserForm = this.builder.group({
    id: this.builder.control(0),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    avatar: this.builder.control('', Validators.required),
  });

  constructor(
    private builder: FormBuilder,
    private ref: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.user) {
      this.title = 'Edit User';
      const userData = this.data.user;
      this.newUserForm.setValue({
        id: userData.id,
        firstname: userData.first_name,
        lastname: userData.last_name,
        email: userData.email,
        avatar: userData.avatar,
      });
    } else {
      this.title = 'Create New User';
    }
  }

  saveNewUser() {
    this.isSubmitted = true;
    if (this.newUserForm.valid) {
      const _obj: user = {
        id: this.newUserForm.value.id as number,
        first_name: this.newUserForm.value.firstname as string,
        last_name: this.newUserForm.value.lastname as string,
        email: this.newUserForm.value.email as string,
        avatar: this.newUserForm.value.avatar as string,
      };
      if (_obj.id === 0) {
        _obj.id = Date.now();
        this.store.dispatch(adduser({ inputdata: _obj }));
        this.snackBar.open(this.notification, 'Close', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['notify-snackbar'],
        });
      } else {
      }
      this.closePopup();
    }
  }

  closePopup() {
    this.ref.close();
  }
}
