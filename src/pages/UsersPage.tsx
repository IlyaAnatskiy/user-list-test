import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../components/Pagination';
import RandomUser from '../components/RandomUser';
import Users from '../components/Users';
import { fetchUsers } from '../redux/actions/users';
import { RootState } from '../redux/reducers';

const UsersPage: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector((state: RootState) => state.users.users);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [usersPerPage] = React.useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <RandomUser users={users} />
      <div className="users__list">
        <Users users={currentUsers} />
      </div>
      <Pagination
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </section>
  );
};

export default UsersPage;
