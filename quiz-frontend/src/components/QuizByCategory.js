import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuizCard from '../components/QuizCard';
import Loader from '../components/Loader';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

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

function QuizByCategory() {
  const { category } = useParams(); // Get category from route params
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/question/category/${category}`)
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, [category]);

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
      const userAnswer = answers[question.id];
      if (!userAnswer) {
        // No answer provided
        unattemptedQuestions += 1;
      } else if (userAnswer === question.rightAnswer) {
        // Correct answer
        calculatedScore += 1;
      } else {
        // Wrong answer
        wrongAnswers += 1;
      }
    });

    // Navigate to the result page with the calculated data
    navigate('/result', {
      state: {
        score: calculatedScore,
        totalQuestions: questions.length,
        wrongAnswers,
        unattemptedQuestions,
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="container">
      {questions.map((question, index) => (
        <QuizCard
          key={index}
          question={question}
          onAnswerSelect={handleAnswerSelect}
        />
      ))}
      <SubmitButton onClick={submitQuiz}>Submit Quiz</SubmitButton>
    </div>
  );
}

export default QuizByCategory;
