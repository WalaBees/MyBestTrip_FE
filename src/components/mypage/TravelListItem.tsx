import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface TravelListItemProps {
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

const TravelListItem: React.FC<TravelListItemProps> = ({
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
    <ListItemContainer>
      <ImageSection>
        <ListItemImage src={imageUrl} alt={title} />
      </ImageSection>
      <ContentSection>
        <div style={{paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', paddingBottom: '16px'}}>
        <TitleSection>
          <SubTitle>{title}</SubTitle>
          <MainTitle>{location}</MainTitle>
        </TitleSection>
        <Description>{description}</Description>
        <div style={{display: 'flex', justifyContent: 'space-between'}}> <TagsSection>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsSection>
        <RatingSection>
          <StarIcon>★</StarIcon>
          <RatingText>{rating} ({reviewCount.toLocaleString()})</RatingText>
        </RatingSection></div>
        </div>
      </ContentSection>
      <FavoriteButton onClick={onFavoriteClick} isFavorite={isFavorite}>
        ♥
      </FavoriteButton>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.div`
  position: relative;
  display: flex;
  border: 1px solid ${lightTheme.colors.gray.light};
  border-radius: 12px;
  background-color: white;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;
  height: 160px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ImageSection = styled.div`
  flex-shrink: 0;
  width: 240px;
  height: 100%;
`;

const ListItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MainTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const SubTitle = styled.span`
  font-size: 13px;
  color: #333;
  margin: 0;
  padding-bottom: 4px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding-top: 18px;
  padding-bottom: 12px;
`;

const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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
  margin-top: auto;
`;

const StarIcon = styled.span`
  color: #ffd700;
  font-size: 14px;
`;

const RatingText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  position: absolute;
  top: 12px;
  right: 24px;
  width: 32px;
  height: 32px;
  border: 2px solid ${props => props.isFavorite ? '#ff6b6b' : '#333'};
  border-radius: 50%;
  background-color: ${props => props.isFavorite ? '#ff6b6b' : 'white'};
  color: ${props => props.isFavorite ? 'white' : '#333'};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isFavorite ? '#ff5252' : '#ff6b6b'};
    color: white;
    transform: scale(1.1);
  }
`;

export default TravelListItem; 