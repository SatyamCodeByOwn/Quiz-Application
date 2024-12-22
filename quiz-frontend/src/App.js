import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import AddQuestion from './pages/AddQuestion';
import CreateQuiz from './pages/CreateQuiz';
import FetchQuizById from './pages/FetchQuizById'; 
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; 
import QuizByCategory from './components/QuizByCategory'; 


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/category/:category" element={<QuizByCategory />} />

        <Route path="/result" element={<Result />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/fetch-quiz" element={<FetchQuizById />} /> {/* New route for fetching quiz by ID */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
