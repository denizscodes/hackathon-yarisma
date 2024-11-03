import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Renesans = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Rönesans Dönemi</Title>
        <Description>
          Rönesans dönemi sanatı, bilimi ve felsefesi üzerindeki etkileri
          keşfedin.
        </Description>
      </Header>
      <Content>
        <LessonContent>
          <Section>
            <h3>Sanat ve Bilim</h3>
            <p>
              Rönesans, 14. yüzyılda İtalya'da başlayan ve Avrupa'ya yayılan bir
              kültürel yeniden doğuş dönemidir. Sanat ve bilimin yeniden
              canlanması bu dönemde gerçekleşmiştir.
            </p>
            <ul>
              <li>
                <strong>Leonardo da Vinci:</strong> "Son Akşam Yemeği" ve "Mona
                Lisa" gibi eserleriyle tanınır.
              </li>
              <li>
                <strong>Michelangelo:</strong> Sistine Şapeli'nin tavanını
                süsleyen freskler onun en bilinen eserlerindendir.
              </li>
              <li>
                <strong>Galileo Galilei:</strong> Astronomi alanındaki
                çalışmaları ile modern bilimin babalarından biri kabul edilir.
              </li>
            </ul>
          </Section>
          <Section>
            <h3>Felsefi Düşünce</h3>
            <p>
              Rönesans, insana ve doğaya olan bakış açısında köklü değişimlere
              yol açmış, hümanizm düşüncesinin yayılmasını sağlamıştır.
            </p>
          </Section>
        </LessonContent>
      </Content>
      <BackButton onClick={() => navigate("/tarih")}>← Geri Dön</BackButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const LessonContent = styled.div`
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Renesans;
