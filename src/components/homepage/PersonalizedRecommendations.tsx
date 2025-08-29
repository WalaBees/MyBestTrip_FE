import React, { useState } from 'react';
import styled from 'styled-components';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TravelCard from '../mypage/TravelCard';
import TravelListItem from '../mypage/TravelListItem';
import { mbtiDestinations } from '../../data/mbtiDestinations';

type ViewMode = 'grid' | 'list';

function PersonalizedRecommendations() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  
  // INTP 사용자를 위한 예시 데이터 (실제로는 사용자 정보에서 가져와야 함)
  const userMbti = 'INTP';
  const userNickname = '채채';
  
  // INTP에 맞는 여행지들 (실제로는 알고리즘으로 추천)
  const recommendedDestinations = mbtiDestinations.filter(dest => 
    dest.mbti === userMbti || ['베를린', '교토', '런던', '뉴욕', '싱가포르', '스위스'].includes(dest.title)
  );

  return (
    <Container>
      <HeaderSection>
        <TitleSection>
          <Title>{userNickname}님({userMbti})에게 맞는 여행지 추천</Title>
        </TitleSection>
        <ViewModeToggle>
          <ViewModeButton 
            active={viewMode === 'list'} 
            onClick={() => setViewMode('list')}
          >
            <ViewListIcon />
          </ViewModeButton>
          <ViewModeButton 
            active={viewMode === 'grid'} 
            onClick={() => setViewMode('grid')}
          >
            <ViewModuleIcon />
          </ViewModeButton>
        </ViewModeToggle>
      </HeaderSection>
      
      <ContentSection>
        {viewMode === 'list' ? (
          <ListViewContainer>
            {recommendedDestinations.map((destination) => (
              <TravelListItem
                key={destination.id}
                title={destination.title}
                location={destination.location}
                imageUrl={destination.imageUrl}
                description={destination.description}
                isFavorite={false}
                onFavoriteClick={() => console.log('즐겨찾기 추가:', destination.id)}
              />
            ))}
          </ListViewContainer>
        ) : (
          <GridContainer>
            {recommendedDestinations.map((destination) => (
              <TravelCard
                key={destination.id}
                title={destination.title}
                location={destination.location}
                imageUrl={destination.imageUrl}
                description={destination.description}
                tags={[destination.mbti, '추천', '인기']}
                isFavorite={false}
                onFavoriteClick={() => console.log('즐겨찾기 추가:', destination.id)}
              />
            ))}
          </GridContainer>
        )}
      </ContentSection>
    </Container>
  );
}

export default PersonalizedRecommendations;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ViewModeToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const ViewModeButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.active ? '#e9ecef' : '#f8f9fa'};
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.active ? '#e9ecef' : '#f8f9fa'};
  }
`;

const ContentSection = styled.div`
  width: 100%;
`;

const ListViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`; 