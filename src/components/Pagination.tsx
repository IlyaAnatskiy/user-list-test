import React from 'react';

interface IPaginationProps {
  currentPage: number;
  usersPerPage: number;
  totalUsers: number;
  paginate(number: number): void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  usersPerPage,
  totalUsers,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page__item  ${currentPage === number ? 'active brown darken-2' : ''}`}>
          <a onClick={() => paginate(number)} className="page__link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
