import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #4a90e2, #0052cc);
  padding: 20px;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #ffeb3b;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>QuizApp</Title>
      <Nav>
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="/quiz">Start Random Quiz</NavLink> | 
        <NavLink to="/add-question">Add Question</NavLink> | 
        <NavLink to="/create-quiz">Create Quiz</NavLink> | 
        <NavLink to="/fetch-quiz">Fetch Quiz</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
