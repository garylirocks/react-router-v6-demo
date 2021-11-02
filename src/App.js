import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import UsersIndex from './components/UsersIndex';
import UserProfile from './components/UserProfile';
import OwnUserProfile from './components/OwnUserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UsersIndex />} />
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;