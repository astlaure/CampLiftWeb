import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store/app.store';

const Navbar: React.FC = () => {
  const email = useSelector((state: AppState) => {
    return state.auth.email;
  });
  return (
    <nav>
      <div>
        <Link to="/">Camp Lift</Link>
      </div>
      <div>
        <div><Link to="/journal">Journal</Link></div>
        <div><Link to="/account">{email}</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
