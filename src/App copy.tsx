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

  const getUsers = async (): Promise<void> => {
    const users = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(users.data);
  };

  useEffect(() => {
    getUsers(); // Викликається при завантаженні компонента
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
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
