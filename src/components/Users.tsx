import React from 'react';
import { IUsers } from '../interfaces';
import User from './User';

interface IUsersProps {
  users: IUsers[];
}

const Users: React.FC<IUsersProps> = ({ users }) => {
  return (
    <div>
      <ul>{users && users.map((item, index) => <User key={`${item.id}_${index}`} {...item} />)}</ul>
    </div>
  );
};

export default Users;
