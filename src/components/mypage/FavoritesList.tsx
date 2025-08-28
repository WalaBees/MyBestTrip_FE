import React, { useState } from 'react';
import styled from 'styled-components';
import type { Favorite, ViewMode } from '../../types/favorite';
import ViewModeToggle from './ViewModeToggle';
import EmptyFavorites from './EmptyFavorites';
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
          <Title>즐겨찾기 <Count>총 0건</Count></Title>
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
        <Title>즐겨찾기 총 {favorites.length}건</Title>
        <ViewModeToggle currentMode={currentViewMode} onModeChange={setCurrentViewMode} />
      </HeaderSection>
      <FavoritesContainer>
        {/* TODO: 실제 즐겨찾기 카드 컴포넌트 추가 */}
        <ComingSoon>즐겨찾기 목록이 곧 추가됩니다.</ComingSoon>
      </FavoritesContainer>
    </ListContainer>
  );
};

export default FavoritesList; 

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
