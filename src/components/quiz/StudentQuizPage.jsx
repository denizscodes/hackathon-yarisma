import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLSwbgTb4H10b2QvEiY-z_MIWpnOlfOF8",
  authDomain: "react-firebase-26ee3.firebaseapp.com",
  projectId: "react-firebase-26ee3",
  storageBucket: "react-firebase-26ee3.appspot.com",
  messagingSenderId: "153661998423",
  appId: "1:153661998423:web:0d2cf17f5ffd440c0baa12",
  measurementId: "G-4B4M6787C6",
};

// Firebase'ı başlat
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const StudentQuizPage = () => {
  const [quizList, setQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "quizzes"));
        const quizData = querySnapshot.docs.map((doc) => doc.data());
        const quizNames = [...new Set(quizData.map((quiz) => quiz.quizname))];
        setQuizList(quizNames);
      } catch (error) {
        console.error("Quiz list alınırken hata oluştu: ", error);
      }
    };
    fetchQuizList();
  }, []);

  const handleQuizSelection = async (quizname) => {
    setSelectedQuiz(quizname);
    const quizData = (await getDocs(collection(db, "quizzes"))).docs
      .map((doc) => doc.data())
      .filter((quiz) => quiz.quizname === quizname);
    setQuizzes(quizData);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAiResponse("");
    setHasSubmitted(false);
    setWarningMessage("");
  };

  const handleAnswerSubmit = () => {
    const isCorrect =
      quizzes[currentQuestionIndex].correctAnswer === selectedAnswer;
    if (isCorrect) setScore((prevScore) => prevScore + 1);
    setHasSubmitted(true);
    setWarningMessage(""); // Clear any warning message
    setAiResponse(""); // Clear AI response after submission
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer("");
      setAiResponse("");
      setHasSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const getAiResponse = async () => {
    if (!hasSubmitted) {
      setWarningMessage("Lütfen cevabınızı göndermeden AI çözümünü almayın.");
      return;
    }

    const currentQuestion = quizzes[currentQuestionIndex].question;
    const currentOptions = quizzes[currentQuestionIndex].options;

    try {
      const response = await axios.post("http://localhost:3001/chat", {
        userInput: `Soru: ${currentQuestion} Seçenekler: ${currentOptions.join(
          ", "
        )}`,
      });
      setAiResponse(response.data.response);
      setWarningMessage("");
    } catch (error) {
      console.error("AI yanıtı alınırken hata oluştu:", error);
      setAiResponse("AI'den yanıt alınamadı.");
    }
  };

  return (
    <Container>
      {!selectedQuiz ? (
        <QuizSelection>
          <h2>Bir Quiz Seçin</h2>
          {quizList.map((quizname, index) => (
            <QuizButton
              key={index}
              onClick={() => handleQuizSelection(quizname)}
            >
              {quizname}
            </QuizButton>
          ))}
        </QuizSelection>
      ) : !showResult ? (
        quizzes.length > 0 && (
          <>
            <Question>{quizzes[currentQuestionIndex].question}</Question>
            <Options>
              {quizzes[currentQuestionIndex].options.map((option, index) => (
                <Option
                  key={index}
                  onClick={() => setSelectedAnswer(option)}
                  selected={selectedAnswer === option}
                >
                  {option}
                </Option>
              ))}
            </Options>
            <SubmitButton onClick={handleAnswerSubmit}>
              Cevabı Gönder
            </SubmitButton>
            <AiSolutionButton onClick={getAiResponse}>
              AI Çözümünü Al
            </AiSolutionButton>
            <NextQuestionButton onClick={handleNextQuestion}>
              Sonraki Soru
            </NextQuestionButton>
            {warningMessage && <Warning>{warningMessage}</Warning>}
            {aiResponse && <AiResponse>{aiResponse}</AiResponse>}
          </>
        )
      ) : (
        <Result>
          <h2>Quiz Tamamlandı!</h2>
          <ScoreText>
            Puanınız: <Score>{score}</Score> / {quizzes.length}
          </ScoreText>
        </Result>
      )}
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const QuizSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const QuizButton = styled.button`
  background-color: #027bff;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }
`;

const Question = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Option = styled.button`
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "#ffffff")};
  color: #333;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AiSolutionButton = styled.button`
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68900;
  }
`;

const NextQuestionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Result = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 18px;
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const Score = styled.span`
  font-weight: bold;
  color: #027bff;
`;

const Warning = styled.p`
  color: red;
  margin-top: 20px;
`;

const AiResponse = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  width: 100%;
  text-align: left;
`;

export default StudentQuizPage; // Keep this line only
