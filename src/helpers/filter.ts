import { User } from "../types/users";

export const filterUsers = (users:User[], nameFilter:string, usernameFilter:string, emailFilter:string, phoneFilter:string):User[] => {
    return users.filter((user) => {
        return (
          user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
          user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
          user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
        );
      });
}