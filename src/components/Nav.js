import {
  Link,
  Outlet
} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div>
        <Link to="/">Home </Link>
        <Link to="users">Users</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;