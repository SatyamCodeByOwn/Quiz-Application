import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  margin: 5px 0;
  padding: 10px;
  background: #f4f4f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

function QuizCard({ question, onAnswerSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswerSelect(question.id, option); // Pass selected answer to the parent
  };

  return (
    <Card>
      <h3>{question.questionTitle}</h3>
      {question.option1 && (
        <Option
          onClick={() => handleOptionClick(question.option1)}
          style={{
            background: selectedOption === question.option1 ? '#d1e7dd' : '#f4f4f4',
          }}
        >
          {question.option1}
        </Option>
      )}
      {question.option2 && (
        <Option
          onClick={() => handleOptionClick(question.option2)}
          style={{
            background: selectedOption === question.option2 ? '#d1e7dd' : '#f4f4f4',
          }}
        >
          {question.option2}
        </Option>
      )}
      {question.option3 && (
        <Option
          onClick={() => handleOptionClick(question.option3)}
          style={{
            background: selectedOption === question.option3 ? '#d1e7dd' : '#f4f4f4',
          }}
        >
          {question.option3}
        </Option>
      )}
      {question.option4 && (
        <Option
          onClick={() => handleOptionClick(question.option4)}
          style={{
            background: selectedOption === question.option4 ? '#d1e7dd' : '#f4f4f4',
          }}
        >
          {question.option4}
        </Option>
      )}
    </Card>
  );
}

export default QuizCard;
