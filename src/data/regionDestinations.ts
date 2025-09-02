export interface RegionDestination {
  id: string;
  title: string;
  location: string;
  address: string;
  imageUrl: string;
  description: string;
  region: string;
  tags: string[];
}

export const regionDestinations: RegionDestination[] = [
  {
    id: '1',
    title: '백령도 콩돌해변',
    location: '인천 옹진군',
    address: '인천 옹진군 백령면',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    description: '자갈에 부딪히는 소리가 마음까지 편안하게 하는 해변',
    region: '인천',
    tags: ['편안한', '조용한', '사람 없는', '가족여행', 'ISFP', 'ISTP']
  },
  {
    id: '2',
    title: '제주도',
    location: '제주특별자치도',
    address: '제주특별자치도',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '제주도의 아름다운 자연과 문화',
    region: '제주도',
    tags: ['자연', '문화', '해변', 'INFP', 'INFJ']
  },
  {
    id: '3',
    title: '전주 한옥마을',
    location: '전라북도 전주시',
    address: '전라북도 전주시',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '전주 한옥마을과 맛집',
    region: '전주',
    tags: ['한옥', '맛집', '문화', 'INFJ', 'ISFJ']
  },
  {
    id: '4',
    title: '경주 불국사',
    location: '경상북도 경주시',
    address: '경상북도 경주시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '경주의 역사와 문화',
    region: '경주',
    tags: ['역사', '문화', '유적', 'ISTJ', 'ESTP']
  },
  {
    id: '5',
    title: '강릉 커피거리',
    location: '강원도 강릉시',
    address: '강원도 강릉시',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
    description: '강릉의 자연과 커피',
    region: '강릉',
    tags: ['자연', '커피', '해변', 'ESTJ', 'ENFP']
  },
  {
    id: '6',
    title: '여수 돌산공원',
    location: '전라남도 여수시',
    address: '전라남도 여수시',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    description: '여수의 아름다운 해변',
    region: '여수',
    tags: ['해변', '자연', '맛집', 'ESTP', 'ENFP']
  },
  {
    id: '7',
    title: '부산 해운대',
    location: '부산광역시',
    address: '부산광역시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '부산의 맛집과 관광지',
    region: '부산',
    tags: ['맛집', '관광', '해변', 'ENFP', 'ENTP']
  },
  {
    id: '8',
    title: '서울 남산타워',
    location: '서울특별시',
    address: '서울특별시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '서울의 상징적인 랜드마크',
    region: '서울',
    tags: ['도시', '관광', '문화', 'ENTJ', 'ENFJ']
  },
  {
    id: '9',
    title: '속초 설악산',
    location: '강원도 속초시',
    address: '강원도 속초시',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
    description: '아름다운 산과 자연',
    region: '속초',
    tags: ['자연', '산', '등산', 'INFP', 'ISTP']
  },
  {
    id: '10',
    title: '통영 한려해상국립공원',
    location: '경상남도 통영시',
    address: '경상남도 통영시',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    description: '통영의 아름다운 바다',
    region: '통영',
    tags: ['해변', '자연', '바다', 'ISFP', 'INFJ']
  },
  {
    id: '11',
    title: '안동 하회마을',
    location: '경상북도 안동시',
    address: '경상북도 안동시',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '전통 한옥마을의 아름다움',
    region: '안동',
    tags: ['한옥', '문화', '전통', 'INFJ', 'ISFJ']
  },
  {
    id: '12',
    title: '포항 구룡포',
    location: '경상북도 포항시',
    address: '경상북도 포항시',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    description: '포항의 아름다운 해안',
    region: '포항',
    tags: ['해변', '자연', '바다', 'ISTJ', 'ESTP']
  }
]; 