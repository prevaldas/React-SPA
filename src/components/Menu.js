import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="nav">
      <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="/">
        Home
      </Link>
      <ul>
        <li className="menu-list">
          <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="joke">
            Generate joke
          </Link>
        </li>
        <li className="menu-list">
          <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="todo">
            To-do list
          </Link>
        </li>
        <li className="menu-list">
          <Link
            style={{ textDecoration: 'none', color: '#2196f3' }}
            to="dogAge"
          >
            Dog age
          </Link>
        </li>
      </ul>
    </nav>
  );
}
