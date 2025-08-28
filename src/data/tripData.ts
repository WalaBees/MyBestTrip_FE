import type { Trip } from '../types/trip';

export const dummyTrips: Trip[] = [
  {
    id: '1',
    title: '제주도 3박 4일',
    location: '제주도',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '제주도의 아름다운 자연과 문화를 체험한 여행',
    startDate: '2025.3.10',
    endDate: '2025.3.13'
  },
  {
    id: '2',
    title: '부산 2박 3일',
    location: '부산',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '부산의 맛집과 관광지를 둘러본 여행',
    startDate: '2025.2.15',
    endDate: '2025.2.17'
  },
  {
    id: '3',
    title: '전주 1박 2일',
    location: '전주',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '전주 한옥마을과 맛집 탐방',
    startDate: '2025.1.20',
    endDate: '2025.1.21'
  },
  {
    id: '4',
    title: '인천 백령도 2박 3일',
    location: '인천 백령도',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '백령도의 아름다운 해변과 일출을 감상한 여행',
    startDate: '2024.12.25',
    endDate: '2024.12.27'
  }
]; 