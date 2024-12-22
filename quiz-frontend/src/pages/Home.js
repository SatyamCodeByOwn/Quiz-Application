import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  display: block;
  margin: 10px auto;
  width: 50%;
`;

const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  display: block;
  margin: 10px auto;
  width: 50%;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #357ab7;
  }
`;

function Home() {
  const [quizId, setQuizId] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (quizId) {
      navigate(`/quiz/${quizId}`);
    } else {
      alert('Please enter a Quiz ID to start the quiz.');
    }
  };

  const handleStartQuizByCategory = () => {
    if (category) {
      navigate(`/quiz/category/${category}`);
    } else {
      alert('Please select a category to start the quiz.');
    }
  };

  return (
    <HomeContainer>
      <Helmet>
        <title>QuizApp - Home</title>
      </Helmet>
      <h2>Welcome to the Quiz App!</h2>
      {/* <Input
        type="number"
        placeholder="Enter Quiz ID"
        value={quizId}
        onChange={(e) => setQuizId(e.target.value)}
      />
      <StartButton onClick={handleStartQuiz}>Start Quiz</StartButton> */}
      
      <Dropdown
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="java">java</option>
        <option value="python">python</option>
        <option value="dsa">dsa</option>
        <option value="c++">c++</option>
      </Dropdown>
      <StartButton onClick={handleStartQuizByCategory}>Start Quiz</StartButton>
    </HomeContainer>
  );
}

export default Home;
