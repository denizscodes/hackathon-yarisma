import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const addQuizQuestion = async (quizData) => {
  try {
    const docRef = await addDoc(collection(db, "quizzes"), quizData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const fetchQuizQuestions = async () => {
  const querySnapshot = await getDocs(collection(db, "quizzes"));
  const quizzes = {};

  querySnapshot.forEach((doc) => {
    const data = { id: doc.id, ...doc.data() };
    const quizname = data.quizname;

    if (!quizzes[quizname]) {
      quizzes[quizname] = [];
    }
    quizzes[quizname].push(data);
  });

  return quizzes;
};

const QuizForm = () => {
  const [quizname, setQuizname] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const maxChars = 100;

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quizData = { quizname, question, options, correctAnswer };
    await addQuizQuestion(quizData);
    setQuizname("");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <Label>Quiz Adı:</Label>
        <StyledInput
          type="text"
          value={quizname}
          onChange={(e) => setQuizname(e.target.value)}
          placeholder="Quiz adını girin"
          required
        />
      </InputContainer>
      <InputContainer>
        <Label>Soru (Max {maxChars} karakter):</Label>
        <StyledInput
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value.slice(0, maxChars))}
          placeholder="Soruyu girin"
          required
        />
        <CharacterCounter>
          {question.length}/{maxChars}
        </CharacterCounter>
      </InputContainer>
      <InputContainer>
        <Label>Şıklar:</Label>
        {options.map((option, index) => (
          <StyledInput
            key={index}
            type="text"
            placeholder={`Şık ${index + 1}`}
            value={option}
            onChange={(e) =>
              handleOptionChange(index, e.target.value.slice(0, maxChars))
            }
            required
          />
        ))}
      </InputContainer>
      <InputContainer>
        <Label>Doğru Cevap:</Label>
        <StyledSelect
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        >
          <option value="">Doğru cevabı seçin</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </InputContainer>
      <SubmitButton type="submit">Quiz Sorusu Ekle</SubmitButton>
    </StyledForm>
  );
};

const App = () => {
  const [quizzes, setQuizzes] = useState({});
  const [expandedQuiz, setExpandedQuiz] = useState(null);

  useEffect(() => {
    const loadQuizzes = async () => {
      const fetchedQuizzes = await fetchQuizQuestions();
      setQuizzes(fetchedQuizzes);
    };

    loadQuizzes();
  }, []);

  const toggleQuiz = (quizname) => {
    setExpandedQuiz(expandedQuiz === quizname ? null : quizname);
  };

  return (
    <Container>
      <Header>
        <Greeting>Quiz Ekleme Uygulaması</Greeting>
        <ProfileImage />
      </Header>
      <QuizForm />
      <SectionTitle>Mevcut Quizler:</SectionTitle>
      {Object.entries(quizzes).map(([quizname, questions]) => (
        <Accordion key={quizname}>
          <AccordionHeader onClick={() => toggleQuiz(quizname)}>
            {quizname}
          </AccordionHeader>
          {expandedQuiz === quizname && (
            <AccordionContent>
              {questions.map((quiz) => (
                <Card key={quiz.id}>
                  <CardContent>
                    <CardTitle>{quiz.question}</CardTitle>
                    <ul>
                      {quiz.options.map((option, index) => (
                        <Option key={index}>{option}</Option>
                      ))}
                    </ul>
                    <CorrectAnswer>
                      Doğru Cevap: {quiz.correctAnswer}
                    </CorrectAnswer>
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          )}
        </Accordion>
      ))}
    </Container>
  );
};

export default App;

// Styled Components

const Container = styled.div`
  padding: 20px;
  max-width: 700px;
  margin: 20px auto;
  background-color: #f9f9fb;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Greeting = styled.h1`
  font-size: 24px;
  color: #333;
`;

const ProfileImage = styled.div`
  display: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  outline: none;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }
`;

const StyledSelect = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
  }
`;

const CharacterCounter = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: #999;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 24px;
`;

const Accordion = styled.div`
  margin-top: 16px;
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  font-size: 18px;
  padding: 12px;
  background-color: #eee;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const AccordionContent = styled.div`
  padding: 12px;
  margin-top: 8px;
`;

const Card = styled.div`
  padding: 20px;
  margin-top: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
`;

const Option = styled.li`
  font-size: 16px;
  color: #555;
`;

const CorrectAnswer = styled.div`
  font-size: 16px;
  color: #4caf50;
  font-weight: bold;
  margin-top: 12px;
`;
