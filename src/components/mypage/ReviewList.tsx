import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import type { Review, SortOrder } from '../../types/review';
import ReviewCard from './ReviewCard';
import SortOptions from './SortOptions';
import { lightTheme } from '../../styles/theme';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  const [currentSort, setCurrentSort] = useState<SortOrder>('newest');

  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      
      if (currentSort === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
  }, [reviews, currentSort]);

  return (
    <ListContainer>
      <HeaderSection>
        <Title>여행지 후기 총 {reviews.length}건</Title>
        <SortOptions currentSort={currentSort} onSortChange={setCurrentSort} />
      </HeaderSection>
      <Divider/>
      <ReviewsContainer>
        {sortedReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ReviewsContainer>
    </ListContainer>
  );
};

export default ReviewList; 

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 6px;
//   border: 1px solid red;
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

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightTheme.colors.gray.light};
`;

