import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userModel } from '../model/user';

const getUserState = createFeatureSelector<userModel>('users');

export const getUserList = createSelector(getUserState, (state) => {
  return state.list;
});

export const getUser = createSelector(getUserState, (state) => {
  return state.userObj;
});
