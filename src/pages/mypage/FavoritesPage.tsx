import React from 'react';
import styled from 'styled-components';
import FavoritesList from '../../components/mypage/FavoritesList';
import type { Favorite } from '../../types/favorite';

const FavoritesPage: React.FC = () => {
  // 빈 배열로 시작 (즐겨찾기가 없는 상태)
  const favorites: Favorite[] = [];

  return (
    <PageContainer>
      <FavoritesList favorites={favorites} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 52px;
  padding: 0 24px;
`;

export default FavoritesPage;
