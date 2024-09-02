import { ReactNode, FC } from 'react';
import { StyledLayout } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
