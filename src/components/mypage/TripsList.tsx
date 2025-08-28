import React, { useState } from 'react';
import styled from 'styled-components';
import type { Trip, ViewMode } from '../../types/trip';
import ViewModeToggle from './ViewModeToggle';
import EmptyTrips from './EmptyTrips';
import { lightTheme } from '../../styles/theme';

interface TripsListProps {
  trips: Trip[];
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('list');

  if (trips.length === 0) {
    return (
      <ListContainer>
        <HeaderSection>
          <Title>이전 여행 <Count>총 0건</Count></Title>
          <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
        </HeaderSection>
        <Divider/>
        <EmptyTrips />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <HeaderSection>
        <Title>이전 여행 총 {trips.length}건</Title>
        <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
      </HeaderSection>
      <TripsContainer>
        {/* TODO: 실제 여행 카드 컴포넌트 추가 */}
        <ComingSoon>이전 여행 목록이 곧 추가됩니다.</ComingSoon>
      </TripsContainer>
    </ListContainer>
  );
};

export default TripsList; 

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Count = styled.span`
  padding-left: 4px;
  font-size: 14px;
  color: ${lightTheme.colors.gray.dark};
`;

const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComingSoon = styled.div`
  text-align: center;
  color: #666;
  font-size: 16px;
  padding: 40px 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightTheme.colors.gray.light};
`;

