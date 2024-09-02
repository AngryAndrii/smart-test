import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { StyledHeader } from "./Header.styled";
import { FC } from 'react';

const Header:FC = () => {
  const { error } = useSelector(
    (state: RootState) => state.users
  );

    return <StyledHeader>
      {error ? (<></>) : (<><h1 className="header">User table</h1>
      <p className="header-descr">enter a query in any search field to filter</p></>)}

    </StyledHeader>;
};

export default Header;
