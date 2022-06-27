import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="nav">
      <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="/">
        Menu
      </Link>
      <ul>
        <li>
          <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="joke">
            Joke
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#2196f3' }} to="todo">
            To Do
          </Link>
        </li>
      </ul>
    </nav>
  );
}
