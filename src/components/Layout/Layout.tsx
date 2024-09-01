import { ReactNode, ReactElement } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledLayout } from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
