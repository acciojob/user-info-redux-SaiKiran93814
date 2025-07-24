import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../redux/actions';

const UserInfo = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter name"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
      </form>
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
