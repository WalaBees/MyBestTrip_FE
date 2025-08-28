import React from 'react';
import styled from 'styled-components';
import type { Review } from '../../types/review';
import { lightTheme } from '../../styles/theme';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <CardContainer>
      <ContentSection>
        <DateText>{review.date}</DateText>
        <Title>{review.title}에 남긴 댓글</Title>
        <Content>{review.content}</Content>
       <div style={{display: 'flex', gap: '10px'}}> <LikesSection>
          <HeartIcon>♥</HeartIcon>
          <LikesCount>{review.likesCount}</LikesCount>
        </LikesSection>
        <InteractionDetail>{review.interactionDetail}</InteractionDetail></div>
       
      </ContentSection>
      <ImageSection>
        <ReviewImage src={review.imageUrl} alt={review.location} />
      </ImageSection>
    </CardContainer>
  );
};

export default ReviewCard; 

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border: 1px solid ${lightTheme.colors.gray.light};
  border-radius: 12px;
  background-color: white;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ContentSection = styled.div`
  width: 660px;
//   border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DateText = styled.div`
  font-size: 14px;
  color: ${lightTheme.colors.gray.dark};
  font-weight: 500;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Content = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin: 0;
`;

const InteractionDetail = styled.div`
  font-size: 12px;
  color: ${lightTheme.colors.gray.dark};
  margin-top: 8px;
`;

const LikesSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
`;

const HeartIcon = styled.span`
  color: #ff6b6b;
  font-size: 14px;
`;

const LikesCount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const ImageSection = styled.div`
  flex-shrink: 0;
`;

const ReviewImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 6px;
  object-fit: cover;
//   border: 1px solid red;
`;
