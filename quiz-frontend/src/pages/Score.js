// src/pages/Score.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #357ab7;
  }
`;

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  return (
    <ScoreContainer>
      <div>Your Score: {score} / {totalQuestions}</div>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </ScoreContainer>
  );
}

export default Score;
