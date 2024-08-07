import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiServicesService } from '../controllers/Users-Api-Services.service';
import {
  adduser,
  loaduser,
  loadusersuccess,
  addusersuccess,
  getuser,
  getusersuccess,
} from './User.Action';
import { exhaustMap, map, of, switchMap } from 'rxjs';

@Injectable()
export class userEffects {
  constructor(
    private action$: Actions,
    private service: UsersApiServicesService
  ) {}

  // =================================
  // load users data
  _loaduser = createEffect(() =>
    this.action$.pipe(
      ofType(loaduser),
      exhaustMap((action) => {
        return this.service.get().pipe(
          map((data) => {
            return loadusersuccess({ list: data });
          })
        );
      })
    )
  );
  //==================================
  // add user
  _adduser = createEffect(() =>
    this.action$.pipe(
      ofType(adduser),
      switchMap((action) => {
        return this.service.post(action.inputdata).pipe(
          switchMap((data) => {
            return of(addusersuccess({ inputdata: action.inputdata }));
          })
        );
      })
    )
  );
  //==================================
  // get user
  _getUser = createEffect(() =>
    this.action$.pipe(
      ofType(getuser),
      exhaustMap((action) => {
        return this.service.getById(action.id).pipe(
          map((data) => {
            return getusersuccess({ obj: data });
          })
        );
      })
    )
  );
}
