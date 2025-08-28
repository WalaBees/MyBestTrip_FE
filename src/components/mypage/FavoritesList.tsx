import React, { useState } from 'react';
import styled from 'styled-components';
import type { Favorite, ViewMode } from '../../types/favorite';
import ViewModeToggle from './ViewModeToggle';
import EmptyFavorites from './EmptyFavorites';
import TravelCard from './TravelCard';
import TravelListItem from './TravelListItem';
import { lightTheme } from '../../styles/theme';

interface FavoritesListProps {
  favorites: Favorite[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites }) => {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('list');

  if (favorites.length === 0) {
    return (
      <ListContainer>
        <HeaderSection>
          <Title>즐겨찾기 총 0건</Title>
          <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
        </HeaderSection>
        <Divider/>
        <EmptyFavorites />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <HeaderSection>
        <Title>즐겨찾기 <Count>총 {favorites.length}건</Count></Title>
        <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
      </HeaderSection>
      <Divider/>
      <FavoritesContainer>
        {currentViewMode === 'list' ? (
          <ListViewContainer>
            {favorites.map((favorite) => (
              <TravelListItem
                key={favorite.id}
                title={favorite.title}
                location={favorite.location}
                imageUrl={favorite.imageUrl}
                description={favorite.description}
                isFavorite={true}
                onFavoriteClick={() => console.log('즐겨찾기 해제:', favorite.id)}
              />
            ))}
          </ListViewContainer>
        ) : (
          <GridContainer>
            {favorites.map((favorite) => (
              <TravelCard
                key={favorite.id}
                title={favorite.title}
                location={favorite.location}
                imageUrl={favorite.imageUrl}
                description={favorite.description}
                isFavorite={true}
                onFavoriteClick={() => console.log('즐겨찾기 해제:', favorite.id)}
              />
            ))}
          </GridContainer>
        )}
      </FavoritesContainer>
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

const FavoritesContainer = styled.div`
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

export default FavoritesList;
