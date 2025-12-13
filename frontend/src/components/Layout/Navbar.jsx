import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
           Task Manager
        </Link>
        {user && (
          <div className="nav-right">
            <span className="user-name">Hello, {user.name}</span>
            <button onClick={toggleTheme} className="btn-theme">
              {isDark ? '☀️' : '🌙'}
            </button>
            <button onClick={logout} className="btn-logout">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;