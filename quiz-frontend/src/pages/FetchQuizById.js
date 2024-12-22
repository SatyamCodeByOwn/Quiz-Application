// src/pages/FetchQuizById.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #357ab7;
  }
`;

const QuestionList = styled.div`
  margin-top: 20px;
`;

const QuestionItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function FetchQuizById() {
  const [quizId, setQuizId] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  const handleFetchQuiz = async () => {
    setError('');
    setQuestions([]);
    try {
      const response = await axios.get(`http://localhost:8080/quiz/get/${quizId}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setError("Quiz not found or error fetching quiz data.");
    }
  };

  return (
    <FormContainer>
      <h2>Fetch Quiz by ID</h2>
      <Input
        type="text"
        placeholder="Enter Quiz ID"
        value={quizId}
        onChange={(e) => setQuizId(e.target.value)}
      />
      <Button onClick={handleFetchQuiz}>Fetch Quiz</Button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {questions.length > 0 && (
        <QuestionList>
          {questions.map((question, index) => (
            <QuestionItem key={index}>
              <h4>{question.questionTitle}</h4>
              <p>Options:</p>
              <ul>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                <li>{question.option4}</li>
              </ul>
            </QuestionItem>
          ))}
        </QuestionList>
      )}
    </FormContainer>
  );
}

export default FetchQuizById;
