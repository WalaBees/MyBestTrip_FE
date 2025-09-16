import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Mountain, Waves, TreePine, Camera } from 'lucide-react';

interface TravelDestination {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface ReviewItem {
  id: number;
  title: string;
  description: string;
  author: string;
}

interface SectionProps {
  background?: string;
}

//const navigate = useNavigate();

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`;

const MaxWidthContainer = styled.div`
  max-width: 1152px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background: rgba(0, 0, 0, 0.60);
  color: white;
  padding: 70px 170px;
  text-align: center;
  height: 216px;
`;

const HeroTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
`;

const HeroText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Section = styled.section<SectionProps>`
  padding: 64px 16px;
  background: ${(props) => props.background || 'transparent'};
`;

const Grid = styled.div`
  display: grid;
  gap: 48px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  margin-bottom: 12px;
`;

const SectionText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const CardTitle = styled.h3`
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
`;

const CardText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const CardSubtext = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;

const DestinationGrid = styled.div`
  display: grid;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

const DestinationEmoji = styled.div`
  font-size: 2.25rem;
  margin-bottom: 16px;
`;

const DestinationName = styled.h3`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

const DestinationDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const CenterSection = styled.section`
  padding: 64px 16px;
  text-align: center;
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background: #374151;
  }
`;

const SmallButton = styled.button`
  display: flex;
  width: 240px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 40px;
  transition: background-color 0.3s;
  
  &:hover {
    background: #374151;
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ReviewCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const ReviewContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ReviewImagePlaceholder = styled.div`
  width: 64px;
  height: 64px;
  background: #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReviewText = styled.div`
  flex: 1;
`;

const ReviewTitle = styled.h3`
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
`;

const ReviewDescription = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const ReversePage = () => {
  const destinations: TravelDestination[] = [
    {
      id: 1,
      name: '강원도, 속초',
      description: '아름다운 바다와 설악산',
      icon: <Mountain style={{ width: 32, height: 32, color: '#3b82f6' }} />,
      image: '🏔️'
    },
    {
      id: 2,
      name: '제주도',
      description: '신비로운 자연 경관',
      icon: <Waves style={{ width: 32, height: 32, color: '#3b82f6' }} />,
      image: '🌊'
    },
    {
      id: 3,
      name: '부산',
      description: '활기찬 해변 도시',
      icon: <TreePine style={{ width: 32, height: 32, color: '#10b981' }} />,
      image: '🏖️'
    },
    {
      id: 4,
      name: '경기도, 가평',
      description: '자연 속 힐링 여행',
      icon: <Mountain style={{ width: 32, height: 32, color: '#10b981' }} />,
      image: '🌲'
    }
  ];

  const reviews: ReviewItem[] = [
    {
      id: 1,
      title: '지난 도전',
      description: '차가운 겨울 속 첫 번째 여행 도전 이야기입니다.',
      author: '여행러'
    },
    {
      id: 2,
      title: '지난 도전',
      description: '따뜻한 봄날의 새로운 여행 이야기입니다.',
      author: '여행러'
    },
    {
      id: 3,
      title: '지난 도전',
      description: '여름 바다 속 즐거운 모험 이야기입니다.',
      author: '여행러'
    }
  ];

  return (
    <Container>
      <HeroSection>
        <MaxWidthContainer>
          <HeroTitle>도전 여행!</HeroTitle>
          <HeroText>
            특별한 경험과 새로운 도전을 통해 잊지 못할 여행 추억을 만들어보세요!
          </HeroText>
        </MaxWidthContainer>
      </HeroSection>

      <Section>
        <MaxWidthContainer>
          <Grid>
            <div>
              <SectionTitle>내 여행 성향</SectionTitle>
              <SectionText
  as={Link}       // styled-components에서 as를 사용해 Link로 변경
  to="/mypage"
  style={{ cursor: 'pointer', color: '#1f2937' }}
>
  {'>'} 내 성향 수정하기
</SectionText>
            </div>
            <Card>
              <CardTitle>나의 여행 성향</CardTitle>
              <CardText>
                혼자서도 자유롭고 여유 있게 즐기고자 하는 성향
              </CardText>
              <CardSubtext>혼족</CardSubtext>
            </Card>
          </Grid>
        </MaxWidthContainer>
      </Section>

      <Section>
        <MaxWidthContainer>
          <Grid>
            <div>
              <SectionTitle>반대 성향 소개</SectionTitle>
              <SectionText>당신의 반대 MBTI 성향은 무엇일까요?</SectionText>
            </div>
            <Card>
              <CardTitle>내 반대 여행 성향</CardTitle>
              <CardText>
                적극적이며 활동적인 성격으로 여러 명과 함께 여행
              </CardText>
              <CardSubtext>인싸</CardSubtext>
            </Card>
          </Grid>
        </MaxWidthContainer>
      </Section>

      <Section background="#f9fafb">
        <MaxWidthContainer>
          <SectionTitle style={{ textAlign: 'center' }}>도전 여행지 추천</SectionTitle>
          <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '48px' }}>
            평소 스타일과 다른 여행지를 도전해보세요!
          </p>
          
          <DestinationGrid>
            {destinations.map((dest) => (
              <DestinationCard key={dest.id}>
                <DestinationEmoji>{dest.image}</DestinationEmoji>
                <DestinationName>{dest.name}</DestinationName>
                <DestinationDescription>{dest.description}</DestinationDescription>
              </DestinationCard>
            ))}
          </DestinationGrid>
        </MaxWidthContainer>
      </Section>

      <CenterSection>
        <MaxWidthContainer>
          <SectionTitle>도전하기!</SectionTitle>
          <Button>
            더 많은 도전 챌린지 보기 →
          </Button>
        </MaxWidthContainer>
      </CenterSection>

      <Section background="#f9fafb">
        <MaxWidthContainer>
          <SectionTitle>이전 도전 히스토리</SectionTitle>
          <SectionText>
            당신의 과거 도전 이야기를 확인하세요!
          </SectionText>
          
          <SmallButton>
            더 많은 도전 기록 보기 →
          </SmallButton>

          <ReviewList>
            {reviews.map((review) => (
              <ReviewCard key={review.id}>
                <ReviewContent>
                  <ReviewImagePlaceholder>
                    <Camera style={{ width: 32, height: 32, color: '#9ca3af' }} />
                  </ReviewImagePlaceholder>
                  <ReviewText>
                    <ReviewTitle>{review.title}</ReviewTitle>
                    <ReviewDescription>{review.description}</ReviewDescription>
                  </ReviewText>
                </ReviewContent>
              </ReviewCard>
            ))}
          </ReviewList>
        </MaxWidthContainer>
      </Section>
    </Container>
  );
};

export default ReversePage;