import {
  Link,
} from 'react-router-dom';

function UserIndex() {
  return (
    <>
      <ul>
        <li><Link to="me">My Profile</Link></li>
        <li><Link to="2">User 2</Link></li>
        <li><Link to="3">User 3</Link></li>
      </ul>
    </>
  );
}

export default UserIndex;