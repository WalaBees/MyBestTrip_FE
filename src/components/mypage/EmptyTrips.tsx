import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

const EmptyTrips: React.FC = () => {
  const handlePlanTripClick = () => {
    console.log('새로운 여행 계획하기');
    // TODO: 여행 계획 페이지로 이동
  };

  return (
    <EmptyContainer>
      <EmptyMessage>아직 등록된 여행이 없어요!</EmptyMessage>
      <PlanTripButton onClick={handlePlanTripClick}>
        새로운 여행 계획하기 →
      </PlanTripButton>
    </EmptyContainer>
  );
};

export default EmptyTrips; 

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

const PlanTripButton = styled.button`
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

