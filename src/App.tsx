import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
// import { User } from "./types/users";
import { fetchUsers } from "./axios/fetchUsers";
import { Loader } from "./components/Loader";
import {
  flterName,
  filterUserName,
  filterEmail,
  filterPhone,
} from "./redux/usersSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    users,
    loading,
    nameFilter,
    usernameFilter,
    emailFilter,
    phoneFilter,
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filterResult = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
    );
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={nameFilter}
                  onChange={(e) => dispatch(flterName(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Search by username"
                  value={usernameFilter}
                  onChange={(e) => dispatch(filterUserName(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Search by email"
                  value={emailFilter}
                  onChange={(e) => dispatch(filterEmail(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="Search by phone"
                  value={phoneFilter}
                  onChange={(e) => dispatch(filterPhone(e.target.value))}
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
            {filterResult.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
