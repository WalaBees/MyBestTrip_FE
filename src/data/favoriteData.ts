import type { Favorite } from '../types/favorite';

export const dummyFavorites: Favorite[] = [
  {
    id: '1',
    title: '인천 옹진군',
    location: '백령도 콩톨해변',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '자갈에 부딪히는 소리가 마음까지 편안하게 하는 해변',
    addedDate: '2025.3.12'
  },
  {
    id: '2',
    title: '전주 한옥마을',
    location: '전통문화의 거리',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '한국의 전통 문화를 깊이 느낄 수 있는 아름다운 한옥마을',
    addedDate: '2025.2.28'
  },
  {
    id: '3',
    title: '부산 해운대',
    location: '해운대 해수욕장',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: '푸른 바다와 하얀 모래사장이 어우러진 아름다운 해변',
    addedDate: '2025.1.15'
  },
  {
    id: '4',
    title: '제주 성산일출봉',
    location: '일출봉 정상',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: '새벽 일출을 감상할 수 있는 환상적인 관광지',
    addedDate: '2024.12.20'
  }
]; 