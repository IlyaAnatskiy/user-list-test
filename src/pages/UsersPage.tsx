import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from '../components/User';
import { IInitialStateUsers, IUsers } from '../interfaces';
import { fetchUsers } from '../redux/actions/users';
import { RootState } from '../redux/reducers';

const UsersPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector<RootState, IUsers[]>((state: RootState) => state.users.users);
  const [activeUser, setActiveUser] = React.useState(0);

  React.useEffect(() => {
    dispatch(fetchUsers());
    let intervalId = setInterval(() => {
      setActiveUser(Math.floor(Math.random() * Math.floor(3)));
    }, 8000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section>
      {<div className="user__name">{`${users[activeUser].surname} ${users[activeUser].name}`}</div>}
      <div className="users__list">
        <ul>
          {users && users.map((item, index) => <User key={`${item.id}_${index}`} {...item} />)}
        </ul>
      </div>
    </section>
  );
};

export default UsersPage;
