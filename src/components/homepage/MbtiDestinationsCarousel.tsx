import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { mbtiDestinations } from '../../data/mbtiDestinations';

function MbtiDestinationsCarousel() {
  // 16개를 4개씩 그룹으로 나누기
  const groupedDestinations = [];
  for (let i = 0; i < mbtiDestinations.length; i += 4) {
    groupedDestinations.push(mbtiDestinations.slice(i, i + 4));
  }

  return (
    <Container>
      <Title>유형별 최고 인기 여행지 추천</Title>
      <CarouselContainer>
        <Carousel data-bs-theme="light" indicators={false}>
          {groupedDestinations.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <DestinationsGrid>
                {group.map((destination) => (
                  <DestinationCard key={destination.id}>
                    <DestinationImage src={destination.imageUrl} alt={destination.title} />
                    <DestinationContent>
                      <MbtiType>{destination.mbti}</MbtiType>
                      <DestinationTitle>{destination.title}</DestinationTitle>
                      <DestinationLocation>{destination.location}</DestinationLocation>
                    </DestinationContent>
                  </DestinationCard>
                ))}
              </DestinationsGrid>
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

export default MbtiDestinationsCarousel;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 48px auto;
  padding: 0 24px;
  margin-top: 42px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

const CarouselContainer = styled.div`
  margin-top: 28px;
  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .carousel-control-prev {
    left: -20px;
  }
  
  .carousel-control-next {
    right: -20px;
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 40px;
  padding: 16px;
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const DestinationContent = styled.div`
  padding: 12px;
`;

const MbtiType = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 6px;
`;

const DestinationTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 3px 0;
`;

const DestinationLocation = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`; 