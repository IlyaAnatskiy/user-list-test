import { ADD_USERS } from './constans';

export interface IUsers {
  id: number | string;
  name: string;
  surname: string;
  desc: string;
}

export interface IAddUsers {
  type: typeof ADD_USERS;
  payload: IUsers[];
}

export interface IInitialStateUsers {
  users: IUsers[] | [];
}
