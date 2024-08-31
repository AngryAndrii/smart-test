import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

function App() {
  const [usersList, setUsers] = useState<User[]>([]);
  const [nameQuery, setNameQuery] = useState<string>("");
  const [usernameQuery, setUsernameQuery] = useState<string>("");
  const [emailQuery, setEmailQuery] = useState<string>("");
  const [phoneQuery, setPhoneQuery] = useState<string>("");

  const getUsers = async (): Promise<void> => {
    const users = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = usersList.filter((user) => {
    return (
      user.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameQuery.toLowerCase()) &&
      user.email.toLowerCase().includes(emailQuery.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneQuery.toLowerCase())
    );
  });

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                placeholder="Search by name"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by username"
                value={usernameQuery}
                onChange={(e) => setUsernameQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by email"
                value={emailQuery}
                onChange={(e) => setEmailQuery(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Search by phone"
                value={phoneQuery}
                onChange={(e) => setPhoneQuery(e.target.value)}
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
          {filteredUsers.map((user) => (
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
