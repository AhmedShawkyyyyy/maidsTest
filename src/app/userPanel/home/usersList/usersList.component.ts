import { LoaderService } from './../../controllers/loader.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UsersApiServicesService } from '../../controllers/Users-Api-Services.service';
import { user } from '../../model/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { loaduser } from '../../store/User.Action';
import { getUserList } from '../../store/User.Selectors';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'usersList',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input()
  searchText: number = 0;
  users: user[] = [];
  isLoading: boolean = true;
  userList!: user[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  notification: string = 'Welcome back';
  constructor(
    private router: Router,
    private loader: LoaderService,
    private store: Store,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loader.loadingAction.subscribe((loading) => {
      this.isLoading = loading;
    });
    this.getAllUsers();
    this.snackBar.open(this.notification, 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['notify-snackbar'],
    });
  }

  getAllUsers() {
    this.store.dispatch(loaduser());
    this.store.select(getUserList).subscribe((item) => {
      this.userList = item;
      this.loader.hideLoader();
    });
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
}
