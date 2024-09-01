import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
// import { User } from "./types/users";
import { fetchUsers } from "./axios/fetchUsers";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                placeholder="Search by name"
                // value={nameQuery}
                // onChange={(e) => setNameQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by username"
                // value={usernameQuery}
                // onChange={(e) => setUsernameQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by email"
                // value={emailQuery}
                // onChange={(e) => setEmailQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by phone"
                // value={phoneQuery}
                // onChange={(e) => setPhoneQuery(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
