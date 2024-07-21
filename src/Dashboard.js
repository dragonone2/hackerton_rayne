import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  background-color: #f7f7f7;
  font-family: 'Arial, sans-serif';
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled(Link)`
  padding: 15px 30px;
  background: #ff5757;
  color: #fff;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.25rem;
  transition: background 0.3s ease, transform 0.3s ease;
  margin: 0 10px;

  &:hover {
    background: #ff3030;
    transform: scale(1.05);
  }
`;

const Message = styled.p`
  margin-top: 30px;
  font-size: 1.5rem;
  color: #666;
  max-width: 600px;
`;

const messages = [
  "건강한 아기를 위해 엄마의 마음을 따뜻하게 유지하세요. 맘스위즈가 여러분의 여정을 함께합니다.",
  "행복한 임신 생활을 위해, 맘스위즈가 언제나 당신 곁에 있습니다.",
  "엄마의 행복이 아기의 행복입니다. 우리 맘스위즈가 도와드릴게요.",
  "건강하고 행복한 임신을 위해, 저희 맘스위즈가 함께 합니다.",
  "엄마의 건강이 최우선입니다. 맘스위즈가 당신을 응원합니다.",
  "엄마의 사랑이 아기의 첫 번째 선물입니다. 맘스위즈와 함께하세요."
];

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const Dashboard = () => {
  const message = getRandomMessage();
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Title>임산부를 위한 챗봇 서비스</Title>
        <Message>{message}</Message>
        <ButtonContainer>
          <Button to="/chatbot">챗봇 시작하기</Button>
          <Button to="/ai-music">AI 음악 생성</Button>
          <Button to="/book-recommendation">도서 추천</Button>
        </ButtonContainer>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
