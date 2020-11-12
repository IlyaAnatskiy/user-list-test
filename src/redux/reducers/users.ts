import { ADD_USERS } from '../../constans';
import { IAddUsers, IInitialStateUsers } from '../../interfaces';

const initialState: IInitialStateUsers = {
  users: [],
};

export const users = (state = initialState, action: IAddUsers): IInitialStateUsers => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
