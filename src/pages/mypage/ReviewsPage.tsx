import React from 'react';
import styled from 'styled-components';
import ReviewList from '../../components/mypage/ReviewList';
import { dummyReviews } from '../../data/reviewData';

const ReviewsPage: React.FC = () => {
  return (
    <PageContainer>
      <ReviewList reviews={dummyReviews} />
    </PageContainer>
  );
};

export default ReviewsPage; 

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: 52px;
`;


