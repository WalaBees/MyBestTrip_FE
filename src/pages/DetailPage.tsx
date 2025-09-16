import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Heart, MessageCircle, Share2, MapPin, Calendar, User, Search, Bell, Menu } from 'lucide-react';

// 타입 정의
declare global {
  interface Window {
    L: any;
  }
}

const Container = styled.div`
  width: 952px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 67px;
  margin-bottom: 18px;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const PlaceLocation = styled.div`
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 14px;
`;

const PlaceName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
`;

const PlaceMbti = styled.div`
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PostActions = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #666;
`;

const MainImage = styled.div`
  width: 952px;
  height: 478px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border-radius: 12px;
`;

const PostContent = styled.div`

`;

const PostTitle = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 42px;
`;

const PostText = styled.p`
  color: rgba(0, 0, 0, 0.80);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-top: 25px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  color: #666;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StatItem = styled.div<{ $liked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${props => props.$liked ? '#e74c3c' : '#666'};
  font-size: 0.9rem;
  cursor: pointer;
`;

const MapSection = styled.div`
  padding: 1rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid #ddd;
  background: #f8f8f8;
`;

const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f8f8;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #666;
`;

const ReviewSection = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  margin: 1rem 0;
`;

const ReviewTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const ReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ReviewTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const ReviewActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewRating = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Star = styled.span<{ $filled: boolean }>`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${props => props.$filled ? '#ffc107' : '#ddd'};
  transition: color 0.2s;
  user-select: none;
  
  &:hover {
    color: #ffc107;
  }
`;

const SubmitButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #45a049;
  }
`;

const CommentsSection = styled.div`
  padding: 1rem;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const CommentProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
`;

const CommentName = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
`;

const CommentTime = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

const CommentText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

function App() {
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // 서울 관광지 좌표
  const locations = [
    { name: '경복궁', lat: 37.5796, lng: 126.9770, address: '서울특별시 종로구' },
    { name: '북촌한옥마을', lat: 37.5825, lng: 126.9834, address: '서울특별시 종로구' },
    { name: '인사동', lat: 37.5741, lng: 126.9854, address: '서울특별시 종로구' }
  ];

  useEffect(() => {
    // Leaflet 지도 초기화
    const initMap = () => {
      if (!mapRef.current || typeof window === 'undefined' || !window.L) return;
      
      // 이미 지도가 초기화되어 있다면 제거
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // 지도 초기화 (서울 중심부)
      const map = window.L.map(mapRef.current).setView([37.5783, 126.9803], 14);
      mapInstanceRef.current = map;

      // OpenStreetMap 타일 레이어 추가
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      // 각 위치에 마커 추가
      locations.forEach((location, index) => {
        // 커스텀 마커 아이콘 생성
        const customIcon = window.L.divIcon({
          html: `
            <div style="
              background: #e74c3c; 
              border: 2px solid white; 
              border-radius: 50%; 
              width: 30px; 
              height: 30px; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              color: white; 
              font-weight: bold; 
              font-size: 14px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
              ${index + 1}
            </div>
          `,
          className: 'custom-marker',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const marker = window.L.marker([location.lat, location.lng], {
          icon: customIcon
        }).addTo(map);

        // 팝업 추가
        marker.bindPopup(`
          <div style="padding: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h3 style="margin: 0 0 4px 0; font-size: 14px; color: #333; font-weight: bold;">${location.name}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">${location.address}</p>
          </div>
        `);
      });
    };

    // Leaflet 라이브러리 로드
    if (window.L) {
      initMap();
    } else {
      // CSS 로드
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(cssLink);

      // JavaScript 로드
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    }

    // 컴포넌트 언마운트 시 지도 정리
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim()) {
      alert('리뷰가 등록되었습니다!');
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <Container>
      <ProfileSection>
        <ProfileInfo>
          <PlaceLocation>전북특별자치도 전주시 완산구</PlaceLocation>
          <PlaceName>전주 한옥마을</PlaceName>
          <PlaceMbti>ISFP가 가장 많이 참여했습니다.</PlaceMbti>
        </ProfileInfo>
        <PostActions>
          <StatItem $liked={isLiked} onClick={handleLike}>
            <Heart size={24} fill={isLiked ? '#e74c3c' : 'none'} />
          </StatItem>
        </PostActions>
      </ProfileSection>

      <MainImage>
        경복궁과 한옥마을의 아름다운 풍경
      </MainImage>

      <PostContent>
        <PostTitle>상세정보</PostTitle>
        <PostText>
          오늘 경복궁을 방문했는데 정말 아름다웠어요. 전통 한옥의 아름다움과 현대적인 서울의 모습이 조화롭게 어우러진 풍경이 너무나 인상깊었습니다. 특히 근정전에서 바라본 북한산의 모습은 정말 장관이었어요. 한복을 입고 사진을 찍는 관광객들의 모습도 보기 좋았습니다.
        </PostText>
        
        <TagsContainer>
          <Tag># 경복궁</Tag>
          <Tag># 한옥마을</Tag>
          <Tag># 전통</Tag>
          <Tag># 서울</Tag>
          <Tag># 여행</Tag>
        </TagsContainer>
      </PostContent>

      <MapSection>
        <MapContainer>
          <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
        </MapContainer>
        
        <LocationList>
          {locations.map((location, index) => (
            <LocationItem key={index}>
              <MapPin size={16} />
              <span>{location.name} ({location.address})</span>
            </LocationItem>
          ))}
        </LocationList>
      </MapSection>

      <ReviewSection>
        <ReviewTitle>여행자 리뷰 작성</ReviewTitle>
        <ReviewForm>
          <ReviewTextarea
            placeholder="이 장소에 대한 리뷰를 작성해주세요..."
            value={reviewText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(e.target.value)}
          />
          <ReviewActions>
            <ReviewRating>
              {[0, 1, 2, 3, 4].map((index) => (
                <Star
                  key={index}
                  $filled={index < rating}
                  onClick={() => handleStarClick(index)}
                >
                  ★
                </Star>
              ))}
            </ReviewRating>
            <SubmitButton onClick={handleReviewSubmit}>
              리뷰 등록
            </SubmitButton>
          </ReviewActions>
        </ReviewForm>
      </ReviewSection>

      <CommentsSection>
        <CommentItem>
          <CommentProfile>이</CommentProfile>
          <CommentContent>
            <CommentHeader>
              <CommentName>이수진</CommentName>
              <CommentTime>2시간 전</CommentTime>
            </CommentHeader>
            <CommentText>
              저도 지난주에 경복궁 다녀왔는데 정말 좋았어요! 특히 수문장 교대식이 인상적이었습니다. 다음에는 한복 체험도 해보고 싶네요.
            </CommentText>
          </CommentContent>
        </CommentItem>

        <CommentItem>
          <CommentProfile>박</CommentProfile>
          <CommentContent>
            <CommentHeader>
              <CommentName>박민수</CommentName>
              <CommentTime>1시간 전</CommentTime>
            </CommentHeader>
            <CommentText>
              사진이 정말 예쁘게 나왔네요! 경복궁은 언제 가도 감동이에요. 봄에 벚꽃 필 때 가면 더 아름답답니다.
            </CommentText>
          </CommentContent>
        </CommentItem>
      </CommentsSection>
    </Container>
  );
}

export default App;