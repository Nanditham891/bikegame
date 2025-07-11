// src/components/QuizGame.jsx
import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Homer", "Tolstoy", "Tagore"],
    answer: "Shakespeare",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

const QuizGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧠 Quiz Game</h1>

      {showResult ? (
        <div style={styles.resultBox}>
          <h2 style={{ color: "#4CAF50" }}>Quiz Complete!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restart} style={styles.button}>Try Again</button>
        </div>
      ) : (
        <div style={styles.quizBox}>
          <h2>{questions[current].question}</h2>
          <div style={styles.options}>
            {questions[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} style={styles.optionButton}>
                {option}
              </button>
            ))}
          </div>
          <p>Question {current + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  quizBox: {
    backgroundColor: "#222",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "1rem 0",
  },
  optionButton: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
  resultBox: {
    backgroundColor: "#111",
    padding: "2rem",
    borderRadius: "12px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
  const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    padding: "5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "6vw", // Responsive font size
    marginBottom: "5vw",
    textAlign: "center",
  },
  quizBox: {
    backgroundColor: "#222",
    padding: "5vw",
    borderRadius: "12px",
    textAlign: "center",
    width: "100%",
    maxWidth: "450px",
    boxSizing: "border-box",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "3vw",
    margin: "4vw 0",
  },
  optionButton: {
    padding: "3vw",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "4vw",
    cursor: "pointer",
    maxWidth: "100%",
  },
  resultBox: {
    backgroundColor: "#111",
    padding: "5vw",
    borderRadius: "12px",
    textAlign: "center",
    width: "100%",
    maxWidth: "450px",
    boxSizing: "border-box",
  },
  button: {
    padding: "3vw 5vw",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "4vw",
    cursor: "pointer",
    marginTop: "4vw",
  },
};

};

export default QuizGame;
