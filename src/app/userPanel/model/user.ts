export interface user {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface userModel {
  list: user[];
  //userObj: user | null;
  userObj: user;
}
