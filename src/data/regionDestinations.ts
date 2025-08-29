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
    title: '제주도',
    location: '제주특별자치도',
    address: '제주특별자치도',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '제주도의 아름다운 자연과 문화',
    region: '제주도',
    tags: ['자연', '문화', '해변']
  },
  {
    id: '2',
    title: '부산',
    location: '부산광역시',
    address: '부산광역시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '부산의 맛집과 관광지',
    region: '부산',
    tags: ['맛집', '관광', '해변']
  },
  {
    id: '3',
    title: '전주',
    location: '전라북도 전주시',
    address: '전라북도 전주시',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '전주 한옥마을과 맛집',
    region: '전주',
    tags: ['한옥', '맛집', '문화']
  },
  {
    id: '4',
    title: '경주',
    location: '경상북도 경주시',
    address: '경상북도 경주시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '경주의 역사와 문화',
    region: '경주',
    tags: ['역사', '문화', '유적']
  },
  {
    id: '5',
    title: '강릉',
    location: '강원도 강릉시',
    address: '강원도 강릉시',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
    description: '강릉의 자연과 커피',
    region: '강릉',
    tags: ['자연', '커피', '해변']
  },
  {
    id: '6',
    title: '여수',
    location: '전라남도 여수시',
    address: '전라남도 여수시',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    description: '여수의 아름다운 해변',
    region: '여수',
    tags: ['해변', '자연', '맛집']
  }
]; 