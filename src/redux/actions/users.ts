import axios from 'axios';
import { Dispatch } from 'redux';

import { ADD_USERS } from '../../constans';
import { IAddUsers, IUsers } from '../../interfaces';

export const fetchUsers = () => (dispatch: Dispatch<IAddUsers>) => {
  axios.get('http://localhost:3001/users').then(({ data }) => dispatch(addUsers(data)));
};

export const addUsers = (payload: IUsers[]): IAddUsers => ({
  type: ADD_USERS,
  payload,
});
