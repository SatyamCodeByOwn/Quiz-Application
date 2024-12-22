// src/pages/CreateQuiz.js
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

function CreateQuiz() {
  const [formData, setFormData] = useState({
    category: '',
    numQ: '',
    title: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/quiz/create`, null, {
        params: {
          category: formData.category,
          numQ: formData.numQ,
          title: formData.title
        }
      });
      alert(response.data); // Success message from backend
      setFormData({ category: '', numQ: '', title: '' }); // Clear form after submission
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("Failed to create quiz");
    }
  };

  return (
    <FormContainer>
      <h2>Create a New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="numQ"
          placeholder="Number of Questions"
          value={formData.numQ}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="title"
          placeholder="Quiz Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Button type="submit">Create Quiz</Button>
      </form>
    </FormContainer>
  );
}

export default CreateQuiz;
