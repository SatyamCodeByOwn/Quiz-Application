// src/pages/AddQuestion.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

const TextArea = styled.textarea`
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

function AddQuestion() {
  const [questionData, setQuestionData] = useState({
    category: '',
    difficultyLevel: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    questionTitle: '',
    rightAnswer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/question/add', questionData);
      alert(response.data); // Display success message
      setQuestionData({
        category: '',
        difficultyLevel: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        questionTitle: '',
        rightAnswer: ''
      });
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question");
    }
  };

  return (
    <FormContainer>
      <Helmet>
        <title>QuizApp - Add Question</title>
      </Helmet>
      <h2>Add New Question</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={questionData.category}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="difficultyLevel"
          placeholder="Difficulty Level"
          value={questionData.difficultyLevel}
          onChange={handleChange}
          required
        />
        <TextArea
          name="questionTitle"
          placeholder="Question Title"
          value={questionData.questionTitle}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="option1"
          placeholder="Option 1"
          value={questionData.option1}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="option2"
          placeholder="Option 2"
          value={questionData.option2}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="option3"
          placeholder="Option 3"
          value={questionData.option3}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="option4"
          placeholder="Option 4"
          value={questionData.option4}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="rightAnswer"
          placeholder="Right Answer"
          value={questionData.rightAnswer}
          onChange={handleChange}
          required
        />
        <Button type="submit">Add Question</Button>
      </form>
    </FormContainer>
  );
}

export default AddQuestion;
