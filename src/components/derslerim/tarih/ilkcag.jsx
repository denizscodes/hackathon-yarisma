import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const IlkCag = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>İlk Çağ Medeniyetleri</Title>
        <Description>
          İlk çağların büyük medeniyetleri ve onların kültürel mirası hakkında
          bilgi.
        </Description>
      </Header>
      <Content>
        <LessonContent>
          <Section>
            <h3>Medeniyetler</h3>
            <p>
              Mezopotamya, Mısır, Hindistan ve Çin gibi ilk büyük medeniyetler,
              tarımın keşfiyle birlikte ortaya çıkmıştır. Bu dönem, insanların
              yerleşik hayata geçişi ve ilk şehirlerin kurulmasıyla
              karakterizedir.
            </p>
            <ul>
              <li>
                <strong>Mezopotamya:</strong> Sümerler, Akadlar, Babilliler ve
                Asurluların oluşturduğu uygarlıklardır. Yazının icadı burada
                gerçekleşmiştir.
              </li>
              <li>
                <strong>Mısır:</strong> Piramitler ve hiyeroglif yazılarıyla
                ünlüdür. Nil Nehri, Mısır'ın tarımsal zenginliğini sağlamıştır.
              </li>
              <li>
                <strong>Hindistan:</strong> İndus Vadisi Uygarlığı, şehir
                planlaması ve su yönetimi konusundaki yenilikleriyle dikkat
                çekmektedir.
              </li>
              <li>
                <strong>Çin:</strong> İlk imparatorlukları, yazı sistemleri ve
                felsefi düşünceleriyle (Konfüçyüs, Laozi) tarihe yön vermiştir.
              </li>
            </ul>
          </Section>
          <Section>
            <h3>Tarihsel Önemi</h3>
            <p>
              İlk çağ medeniyetleri, günümüzdeki toplumların temelini atmış,
              bilim, sanat ve yazının gelişmesine katkı sağlamıştır. Bu
              medeniyetlerin bıraktığı miras, sonraki dönemlerdeki uygarlıkları
              derinden etkilemiştir.
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

export default IlkCag;
