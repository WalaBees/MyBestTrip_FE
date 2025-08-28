import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

const EmptyFavorites: React.FC = () => {
  const handleRecommendClick = () => {
    console.log('여행지 추천받으러 가기');
    // TODO: 여행지 추천 페이지로 이동
  };

  return (
    <EmptyContainer>
      <EmptyMessage>아직 즐겨찾기한 여행지가 없어요!</EmptyMessage>
      <RecommendButton onClick={handleRecommendClick}>
        여행지 추천받으러 가기 →
      </RecommendButton>
    </EmptyContainer>
  );
};

export default EmptyFavorites; 

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${lightTheme.colors.gray.light};
  border-radius: 12px;
  padding: 80px 40px;
  margin-top: 40px;
`;

const EmptyMessage = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

const RecommendButton = styled.button`
  background: none;
  border: none;
  color: ${lightTheme.colors.gray.dark};
  font-size: 14px;
  cursor: pointer;
  padding: 16px 42px;
  border-radius: 8px;
  transition: all 0.2s ease;
  background-color: white;

  &:hover {
    color: #333;
  }
`;
