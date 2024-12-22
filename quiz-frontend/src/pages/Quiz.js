import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuizCard from '../components/QuizCard';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto;
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

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Attempting to fetch questions from the backend...");
    axios.get('http://localhost:8080/question/allQuestions')
      .then(response => {
        console.log("Fetched questions:", response.data);
        setQuestions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswerSelect = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const submitQuiz = () => {
    let calculatedScore = 0;
    let wrongAnswers = 0;
    let unattemptedQuestions = 0;

    questions.forEach((question) => {
      if (answers[question.id]) {
        if (answers[question.id] === question.rightAnswer) {
          calculatedScore += 1; // Correct answer
        } else {
          wrongAnswers += 1; // Wrong answer
        }
      } else {
        unattemptedQuestions += 1; // Unattempted question
      }
    });

    // Pass all the values to the Result page
    navigate('/result', { 
      state: { 
        score: calculatedScore, 
        totalQuestions: questions.length,
        wrongAnswers,
        unattemptedQuestions 
      } 
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      {questions.map((question, index) => (
        <QuizCard
          key={index}
          question={question}
          onAnswerSelect={handleAnswerSelect} // Pass the answer handler to QuizCard
        />
      ))}
      <SubmitButton onClick={submitQuiz}>Submit Quiz</SubmitButton>
    </div>
  );
}

export default Quiz;
