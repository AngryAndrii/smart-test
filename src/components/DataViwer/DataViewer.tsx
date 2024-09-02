import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchUsers } from '../../axios/fetchUsers';
import { Loader } from '../../components/Loader/Loader';
import { filterName, filterUserName, filterEmail, filterPhone } from '../../redux/usersSlice';
import { StyledDataViewer } from './DataViewer.styled';
import { filterUsers } from '../../helpers/filter';
import { Error } from '../Error/Error';

const DataViewer:FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, error, loading, nameFilter, usernameFilter, emailFilter, phoneFilter } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
 
  const filterResult = filterUsers(users, nameFilter, usernameFilter, emailFilter, phoneFilter);

 if (error) {
  return <Error/>
 }

  return (
    <StyledDataViewer>
      {loading ? (
        <Loader />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  placeholder="filter by name"
                  value={nameFilter}
                  onChange={(e) => dispatch(filterName(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="filter by username"
                  value={usernameFilter}
                  onChange={(e) => dispatch(filterUserName(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="filter by mail"
                  value={emailFilter}
                  onChange={(e) => dispatch(filterEmail(e.target.value))}
                />
              </th>
              <th>
                <input
                  type="text"
                  placeholder="filter by phone"
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
            {filterResult.length === 0 ? (
              <tr className="no-res-data">
                <td colSpan={4}>no result, please input valid data</td>
              </tr>
            ) : (
              filterResult.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </StyledDataViewer>
  );
};

export default DataViewer;
