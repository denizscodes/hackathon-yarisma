import React from "react";
import styled from "styled-components";

const Derslerim = () => {
  return (
    <Container>
      <Header>
        <Title>Derslerim</Title>
        <Subtitle>Kategoriler</Subtitle>
      </Header>
      <CategoryGrid>
        <a href="/tarih">
          <CategoryCard color="#A1C4FF">
            <CategoryTitle>Tarih</CategoryTitle>
            <CategoryDescription>
              Tarihin ilginç olaylarını ve geçmişin izlerini keşfedin.
            </CategoryDescription>
            <StartButton>Dersi Başlat →</StartButton>
          </CategoryCard>
        </a>
        <CategoryCard color="#FFD580">
          <CategoryTitle>Matematik( YAKINDA )</CategoryTitle>
          <CategoryDescription>
            Matematiğin gizemli dünyasına adım atın ve pratik yapın.
          </CategoryDescription>
          <StartButton>Dersi Başlat →</StartButton>
        </CategoryCard>
        <CategoryCard color="#FFABAB">
          <CategoryTitle>Türkçe( YAKINDA )</CategoryTitle>
          <CategoryDescription>
            Dil bilgisi, okuma ve yazma becerilerinizi geliştirin.
          </CategoryDescription>
          <StartButton>Dersi Başlat →</StartButton>
        </CategoryCard>
      </CategoryGrid>
    </Container>
  );
};

export default Derslerim;

// Styled Components
const Container = styled.div`
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 20px;
  border-radius: 20px;
  color: white;
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CategoryDescription = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const StartButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: white;
  background-color: #3564eb;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
