import React, { useState } from 'react';
import styled from 'styled-components';
import type { Trip, ViewMode } from '../../types/trip';
import ViewModeToggle from './ViewModeToggle';
import EmptyTrips from './EmptyTrips';
import TravelCard from './TravelCard';
import TravelListItem from './TravelListItem';
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
        <Title>이전 여행 <Count>총 {trips.length}건</Count></Title>
        <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
      </HeaderSection>
      <Divider/>
      <TripsContainer>
        {currentViewMode === 'list' ? (
          <ListViewContainer>
            {trips.map((trip) => (
              <TravelListItem
                key={trip.id}
                title={trip.title}
                location={trip.location}
                imageUrl={trip.imageUrl}
                description={trip.description}
                isFavorite={false}
                onFavoriteClick={() => console.log('즐겨찾기 추가:', trip.id)}
              />
            ))}
          </ListViewContainer>
        ) : (
          <GridContainer>
            {trips.map((trip) => (
              <TravelCard
                key={trip.id}
                title={trip.title}
                location={trip.location}
                imageUrl={trip.imageUrl}
                description={trip.description}
                isFavorite={false}
                onFavoriteClick={() => console.log('즐겨찾기 추가:', trip.id)}
              />
            ))}
          </GridContainer>
        )}
      </TripsContainer>
    </ListContainer>
  );
};

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

const ListViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightTheme.colors.gray.light};
`;

export default TripsList;

