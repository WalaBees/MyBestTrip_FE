import React from 'react';
import styled from 'styled-components';
import TripsList from '../../components/mypage/TripsList';
import type { Trip } from '../../types/trip';

const TripsPage: React.FC = () => {
  // 빈 배열로 시작 (이전 여행이 없는 상태)
  const trips: Trip[] = [];

  return (
    <PageContainer>
      <TripsList trips={trips} />
    </PageContainer>
  );
};

export default TripsPage;


const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 52px;
  padding: 0 24px;
`;


