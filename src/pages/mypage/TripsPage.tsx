import React from 'react';
import styled from 'styled-components';

const TripsPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle>이전 여행</PageTitle>
      <ComingSoon>이전 여행 기능이 곧 추가됩니다.</ComingSoon>
    </PageContainer>
  );
};

export default TripsPage; 

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
`;

const ComingSoon = styled.div`
  text-align: center;
  color: #666;
  font-size: 1rem;
  padding: 3rem 0;
`;

