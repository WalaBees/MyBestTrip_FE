import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface TravelCardProps {
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  tags?: string[];
  rating?: number;
  reviewCount?: number;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

const TravelCard: React.FC<TravelCardProps> = ({
  title,
  location,
  imageUrl,
  description,
  tags = ['편안한', '조용한', 'ISFP'],
  rating = 5.0,
  reviewCount = 1233,
  isFavorite = false,
  onFavoriteClick
}) => {
  return (
    <CardContainer>
      <ImageSection>
        <CardImage src={imageUrl} alt={title} />
        <FavoriteButton onClick={onFavoriteClick} isFavorite={isFavorite}>
          ♥
        </FavoriteButton>
      </ImageSection>
      <ContentSection>
        <TitleSection>
          <SubTitle>{title}</SubTitle>
          <MainTitle>{location}</MainTitle>
        </TitleSection>
        <RatingSection>
          <StarIcon>★</StarIcon>
          <RatingText>{rating} ({reviewCount.toLocaleString()})</RatingText>
        </RatingSection>
        <TagsSection>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsSection>
       
      </ContentSection>
    </CardContainer>
  );
};

export default TravelCard; 

const CardContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.isFavorite ? '#ff6b6b' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.isFavorite ? 'white' : '#ff6b6b'};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isFavorite ? '#ff5252' : 'white'};
    transform: scale(1.1);
  }
`;

const ContentSection = styled.div`
  padding: 16px;
`;

const TitleSection = styled.div`
  margin-bottom: 8px;
`;

const MainTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  padding-top: 4px;
  padding-bottom: 8px;
`;

const SubTitle = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: ${lightTheme.colors.gray.dark};
  margin: 0;
  padding-bottom: 4px;
`;


const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

const Tag = styled.span`
  background-color: ${lightTheme.colors.backgroundLight};
  color: ${lightTheme.colors.gray.dark};
  font-size: 12px;
  padding: 10px;
  border-radius: 12px;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarIcon = styled.span`
  color: #ffd700;
  font-size: 14px;
`;

const RatingText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #333;
`;

