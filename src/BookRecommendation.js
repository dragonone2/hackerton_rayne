import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
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

const BookRecommendation = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>도서 추천 페이지</Title>
        <p>여기에서 임산부에게 추천하는 도서를 확인할 수 있습니다.</p>
      </Container>
    </>
  );
};

export default BookRecommendation;
