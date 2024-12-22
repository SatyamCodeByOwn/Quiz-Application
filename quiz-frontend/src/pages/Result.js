import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 22px;
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

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, wrongAnswers, unattemptedQuestions } = location.state || { 
    score: 0, 
    totalQuestions: 0, 
    wrongAnswers: 0, 
    unattemptedQuestions: 0 
  };

  return (
    <ResultContainer>
      <h2>Your Quiz Result</h2>
      <p>Score: {score} / {totalQuestions}</p>
      <p>Wrong Answers: {wrongAnswers}</p>
      <p>Unattempted Questions: {unattemptedQuestions}</p>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </ResultContainer>
  );
}

export default Result;
