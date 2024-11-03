import React from "react";
import styled from "styled-components";

const ResultPage = ({ score, totalQuestions }) => {
  return (
    <Container>
      <Title>Sonuç</Title>
      <ScoreText>
        Sonucunuz: <Score>{score}</Score> / <Total>{totalQuestions}</Total>!
      </ScoreText>
      <Message>
        {score === totalQuestions ? "Tebrikler!" : "Çalışmaya Devam!"}
      </Message>
    </Container>
  );
};

export default ResultPage;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, #f5f7fa, #e1e8ed);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 0.6s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 16px;
`;

const Score = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  color: #4caf50;
`;

const Total = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #666;
  font-style: italic;
  margin-top: 20px;
`;
