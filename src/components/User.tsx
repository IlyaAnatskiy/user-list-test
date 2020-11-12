import React from 'react';

interface UserProps {
  id: number | string;
  name: string;
  surname: string;
  desc: string;
}

const User: React.FC<UserProps> = ({ id, name, surname, desc }) => {
  return (
    <li>
      <div className="user__info">
        <div className="user__name">{`${name} ${surname}`}</div>
        <span className="user__desc">{`${desc}`}</span>
      </div>
    </li>
  );
};

export default User;
