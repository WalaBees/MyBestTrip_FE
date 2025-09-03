import React from 'react';
import styled from 'styled-components';
import TripsList from '../../components/mypage/TripsList';
import { dummyTrips } from '../../data/tripData';

const TripsPage: React.FC = () => {
  return (
    <PageContainer>
      <TripsList trips={dummyTrips} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 52px;
  margin-bottom: 80px;
`;

export default TripsPage;


