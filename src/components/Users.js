import {
  Outlet
} from 'react-router-dom';

function Users() {
  return (
    <div>
      <nav>
        <h2>All Users</h2>
      </nav>
      <Outlet />
    </div>
  );
}

export default Users;