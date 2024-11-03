import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Tarih</Title>
        <Description>
          Tarihin derinliklerine yolculuk yapın ve geçmişin izlerini keşfedin.
        </Description>
      </Header>
      <Content>
        <a href="/ilkcag">
          <LessonSection>
            <LessonTitle>İlk Çağ Medeniyetleri</LessonTitle>
            <LessonContent>
              İlk çağların büyük medeniyetleri ve onların kültürel mirası
              hakkında bilgi edinin. Mezopotamya, Mısır, Hindistan ve Çin
              medeniyetlerinin tarihi önemi.
            </LessonContent>
            <LearnMoreButton onClick={() => navigate("/tarih/ilk-cag")}>
              Daha Fazla Öğren →
            </LearnMoreButton>
          </LessonSection>
        </a>
        <a href="/ortacag">
          <LessonSection>
            <LessonTitle>Orta Çağ Avrupası</LessonTitle>
            <LessonContent>
              Orta Çağ'da Avrupa'nın önemli olayları ve dönemin sosyal yapısı
              hakkında bilgi edinin. Şövalyeler, krallıklar ve Haçlı Seferleri
              üzerine derinlemesine bir bakış.
            </LessonContent>
            <LearnMoreButton onClick={() => navigate("/tarih/orta-cag")}>
              Daha Fazla Öğren →
            </LearnMoreButton>
          </LessonSection>
        </a>
        <a href="/ronesans">
          <LessonSection>
            <LessonTitle>Rönesans Dönemi</LessonTitle>
            <LessonContent>
              Rönesans dönemi sanatı, bilimi ve felsefesi üzerindeki etkileri
              keşfedin. Leonardo da Vinci ve Michelangelo gibi önemli figürlerin
              rolü.
            </LessonContent>
            <LearnMoreButton onClick={() => navigate("/tarih/renesans")}>
              Daha Fazla Öğren →
            </LearnMoreButton>
          </LessonSection>
        </a>
      </Content>
      <BackButton onClick={() => navigate("/derslerim")}>← Geri Dön</BackButton>
    </Container>
  );
};

export default History;

// Styled Components
const Container = styled.div`
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #3564eb;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const LessonSection = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LessonTitle = styled.h3`
  font-size: 20px;
  color: #3564eb;
`;

const LessonContent = styled.p`
  font-size: 14px;
  color: #333;
`;

const LearnMoreButton = styled.button`
  margin-top: 10px;
  padding: 10px 16px;
  color: white;
  background-color: #3564eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004a99;
  }
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 16px;
  color: white;
  background-color: #3564eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004a99;
  }
`;
