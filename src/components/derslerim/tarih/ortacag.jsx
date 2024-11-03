import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OrtaCag = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Orta Çağ Avrupası</Title>
        <Description>
          Orta Çağ'da Avrupa'nın önemli olayları ve dönemin sosyal yapısı
          hakkında bilgi.
        </Description>
      </Header>
      <Content>
        <LessonContent>
          <Section>
            <h3>Önemli Olaylar</h3>
            <p>
              Orta Çağ, 5. yüzyıldan 15. yüzyıla kadar süren dönemi kapsar. Bu
              dönemdeki önemli olaylar arasında Şövalyelik, feodalizm, ve Haçlı
              Seferleri bulunmaktadır.
            </p>
            <ul>
              <li>
                <strong>Şövalyelik:</strong> Şövalyeler, feodal sistemin önemli
                bir parçasıydı ve onurlu savaşçılar olarak kabul edilirdi.
              </li>
              <li>
                <strong>Feodalizm:</strong> Toplumsal ve ekonomik yapı, lordlar,
                şövalyeler ve köleler arasında bölünmüştür.
              </li>
              <li>
                <strong>Haçlı Seferleri:</strong> Hristiyanlar tarafından
                Müslümanlara karşı düzenlenen savaşlar, din ve politika
                üzerindeki etkileriyle dikkat çeker.
              </li>
            </ul>
          </Section>
          <Section>
            <h3>Sosyal Yapı</h3>
            <p>
              Orta Çağ'da toplum, üç ana sınıfa ayrılmıştı: aristokrasi, din
              adamları ve halk. Bu sınıflar arasında belirgin farklar ve
              ayrıcalıklar vardı.
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

export default OrtaCag;
