import React from 'react';
import { IUsers } from '../interfaces';

interface IRandomUserProps {
  users: IUsers[];
}

const RandomUser: React.FC<IRandomUserProps> = ({ users }) => {
  const [activeUser, setActiveUser] = React.useState(1);

  const randomNumber = (max: number) => {
    return Math.floor(Math.random() * (max - 1 + 1));
  };

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      setActiveUser(randomNumber(users.length));
    }, 8000);
    return () => {
      clearInterval(intervalId);
    };
  }, [users]);

  return (
    <>
      {users[activeUser] && (
        <div className="user__name">{`${users[activeUser].surname} ${users[activeUser].name}`}</div>
      )}
    </>
  );
};

export default RandomUser;
