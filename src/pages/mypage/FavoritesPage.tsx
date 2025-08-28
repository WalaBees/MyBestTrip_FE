import React from 'react';
import styled from 'styled-components';
import FavoritesList from '../../components/mypage/FavoritesList';
import { dummyFavorites } from '../../data/favoriteData';

const FavoritesPage: React.FC = () => {
  return (
    <PageContainer>
      <FavoritesList favorites={dummyFavorites} />
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
