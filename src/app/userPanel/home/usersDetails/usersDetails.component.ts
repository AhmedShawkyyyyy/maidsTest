import { getuser } from './../../store/User.Action';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiServicesService } from '../../controllers/Users-Api-Services.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from '../../store/User.Selectors';
import { user } from '../../model/user';

@Component({
  selector: 'usersDetails',
  templateUrl: './usersDetails.component.html',
  styleUrls: ['./usersDetails.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  // store users$ in Observable>> to store the data of selected user
  users$: Observable<user | null> = this.store.select(getUser);
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.getUserInfo();
    this.users$.subscribe((user) => {
      // console.log(user);
    });
  }

  getUserInfo() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.store.dispatch(getuser({ id: this.id }));
    } else {
      console.error('User ID is not in the liste');
    }
  }

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
