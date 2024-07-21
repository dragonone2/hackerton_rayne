import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  background: #333;
  padding: 10px 0;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; /* 버튼 사이의 간격 */
`;

const AccountButton = styled(Link)`
  padding: 10px 20px;
  background: #4CAF50; /* 자연스러운 녹색 */
  color: #fff;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #45A049;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/">맘스위즈</Logo>
        <ButtonGroup>
          <AccountButton to="/account">계정</AccountButton>
          <AccountButton to="/">홈</AccountButton>
        </ButtonGroup>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
