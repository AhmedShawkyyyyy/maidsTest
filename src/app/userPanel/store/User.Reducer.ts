import { user } from './../model/user';
import { createReducer, on } from '@ngrx/store';
import { userState } from './User.State';
import {
  addusersuccess,
  getusersuccess,
  loaduser,
  loadusersuccess,
} from './User.Action';

const _UserReducer = createReducer(
  userState,
  on(loaduser, (state) => {
    return { ...state };
  }),
  on(loadusersuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
    };
  }),
  on(addusersuccess, (state, action) => {
    const mixid = Math.max(...state.list.map((_o: { id: any }) => _o.id));
    const _newdata = { ...action.inputdata };
    _newdata.id = mixid + 1;
    return {
      ...state,
      lsit: [...state.list, _newdata],
    };
  }),
  on(getusersuccess, (state, action) => {
    return {
      ...state,
      userObj: action.obj,
    };
  })
);

export function UserReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
