import { StyledHeader } from "./Header.styled";
import { FC } from 'react';


const Header:FC = () => {
  return <StyledHeader>
      <h1 className="header">User table</h1>
      <p className="header-descr">enter a query in any search field to filter</p>
    </StyledHeader>;
};

export default Header;
