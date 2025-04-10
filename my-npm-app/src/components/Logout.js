import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth/authThunks';

export const Logout = () => {
  const { status, displayName } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (status !== 'authenticated') return null;

  return (
    <div>
      <p>Welcome {displayName}</p>
      <button onClick={() => dispatch(startLogout())}>
        Logout
      </button>
    </div>
  );
};