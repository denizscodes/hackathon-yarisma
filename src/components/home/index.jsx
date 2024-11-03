import React from "react";
import { useAuth } from "../../contexts/authContext";
import styled from "styled-components";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const currentDate = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Container>
      <Header>
        <StyledDate>{currentDate}</StyledDate>
        <Greeting>
          Hoşgeldin,{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </Greeting>
        <ProfileImage />
      </Header>
      <Stats>
        <StatItem color="#3564EB">
          <StatNumber>13</StatNumber>
          <StatLabel>Aktif</StatLabel>
        </StatItem>
        <StatItem color="#E0E0E0">
          <StatNumber>15</StatNumber>
          <StatLabel>Beklemede</StatLabel>
        </StatItem>
        <StatItem color="#E0E0E0">
          <StatNumber>21</StatNumber>
          <StatLabel>Tamamlandı</StatLabel>
        </StatItem>
      </Stats>
      <CardGrid>
        <a href="/quizlerim">
          {" "}
          <Card color="#A1C4FF">
            <Enrolled>3 Quiz</Enrolled>
            <CardContent>
              <CardTitle>Quizlerim</CardTitle>
              <CardSubtitle>Bu kolay ve basit adımları takip et</CardSubtitle>
              <EnrollButton>Hemen Çöz →</EnrollButton>
            </CardContent>
          </Card>{" "}
        </a>
        <a href="/derslerim">
          <Card color="#E1C8FF">
            <Enrolled>2 Ders</Enrolled>
            <CardContent>
              <CardTitle>Derslerim</CardTitle>
              <CardSubtitle>Kendi hızınızda öğrenin</CardSubtitle>
              <EnrollButton>Hemen Keşfet →</EnrollButton>
            </CardContent>
          </Card>
        </a>
        <Card color="#FFD580">
          <Enrolled>Yakında</Enrolled>
          <CardContent>
            <CardTitle>Hedeflerim</CardTitle>
            <CardSubtitle>
              Hedeflerinize doğru ilerlemeyi takip edin
            </CardSubtitle>
            <EnrollButton>Hedefleri Gör →</EnrollButton>
          </CardContent>
        </Card>
        <Card color="#FFABAB">
          <Enrolled>Yakında</Enrolled>
          <CardContent>
            <CardTitle>Mesajlar</CardTitle>
            <CardSubtitle>Arkadaşlarınızla bağlantıda kalın</CardSubtitle>
            <EnrollButton>Mesajları Oku →</EnrollButton>
          </CardContent>
        </Card>
        <Card color="#B0EFC1">
          <Enrolled>Yakında</Enrolled>
          <CardContent>
            <CardTitle>Bildirimler</CardTitle>
            <CardSubtitle>Güncellemelerden haberdar olun</CardSubtitle>
            <EnrollButton>Bildirimleri Gör →</EnrollButton>
          </CardContent>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default Dashboard;

// Styled Components
const Container = styled.div`
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledDate = styled.div`
  color: #999;
  font-size: 14px;
`;

const Greeting = styled.h1`
  font-size: 24px;
  color: #333;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #a1c4ff;
  border-radius: 50%;
`;

const Stats = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: white;
`;

const StatNumber = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const StatLabel = styled.span`
  font-size: 14px;
`;

// Grid layout for cards
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  padding: 20px;
  border-radius: 20px;
`;

const Enrolled = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 14px;
  color: #333;
  background: white;
  padding: 4px 8px;
  border-radius: 10px;
`;

const CardContent = styled.div`
  margin-top: 40px;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 18px;
`;

const CardSubtitle = styled.p`
  color: white;
  font-size: 14px;
`;

const EnrollButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 14px;
  color: white;
  background-color: #3564eb;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
