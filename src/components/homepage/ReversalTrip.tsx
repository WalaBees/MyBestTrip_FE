import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface ReversalTripProps {
  onCategoryClick: (category: string) => void;
}

function ReversalTrip({ onCategoryClick }: ReversalTripProps) {
  const categories = [
    {
      id: 'festival',
      name: '현지 페스티벌',
      icon: '🔥',
      color: '#ff6b6b'
    },
    {
      id: 'camping',
      name: '감성 캠핑',
      icon: '📷',
      color: '#4ecdc4'
    },
    {
      id: 'food',
      name: '먹거리 투어',
      icon: '🍔',
      color: '#45b7d1'
    },
    {
      id: 'city',
      name: '도심 속 인싸 투어',
      icon: '👑',
      color: '#96ceb4'
    },
    {
      id: 'walking',
      name: '도보여행',
      icon: '☀️',
      color: '#feca57'
    }
  ];

  return (
    <Container>
      <Title>오늘의 반전 여행</Title>
      <Subtitle>채채님을 위한 반전 여행에 도전해보세요!</Subtitle>
      
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryItem 
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
          >
            <IconCircle color={category.color}>
              <Icon>{category.icon}</Icon>
            </IconCircle>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
      </CategoryGrid>
    </Container>
  );
}

export default ReversalTrip;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: center;
  background-color: #f7f7f7;
  margin-top: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 48px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const IconCircle = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const Icon = styled.div`
  font-size: 32px;
  filter: brightness(0) invert(1);
`;

const CategoryName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: center;
  line-height: 1.4;
`; 