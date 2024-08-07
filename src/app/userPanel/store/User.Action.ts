import { createAction, props } from '@ngrx/store';
import { user } from '../model/user';

export const LOAD_USER = '[user page] load user';
export const LOAD_USER_SUCCESS = '[user page] load user success';
export const ADD_USER = '[user page] add user';
export const ADD_USER_SUCCESS = '[user page] add user success';
export const OPEN_POPUP = '[associate page] open popup';
export const UPDATE_USER = '[user page] update user';
export const UPDATE_USER_SUCCESS = '[user page] update user success';
export const GET_USER = '[user page] get user success';
export const GET_USER_SUCCEESS = '[user page] get user success';
// load users data
export const loaduser = createAction(LOAD_USER);
export const loadusersuccess = createAction(
  LOAD_USER_SUCCESS,
  props<{ list: user[] }>()
);
// add new user

export const adduser = createAction(ADD_USER, props<{ inputdata: user }>());
export const addusersuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ inputdata: user }>()
);
// get user

export const getuser = createAction(GET_USER, props<{ id: number }>());
export const getusersuccess = createAction(
  GET_USER_SUCCEESS,
  props<{ obj: user }>()
);

export const openpopup = createAction(OPEN_POPUP);
