import type { Review } from '../types/review';

export const dummyReviews: Review[] = [
  {
    id: '1',
    date: '2025.3.12',
    title: '제주 성산일출봉',
    content: '일출봉에서 본 해돋이는 정말 환상적이었어요. 새벽 5시에 일어나서 올라갔는데, 정말 값진 경험이었습니다. 바람이 좀 셌지만 그만큼 더욱 특별했어요.',
    interactionDetail: 'ENFJ로부터 가장 많은 좋아요을 받았어요',
    likesCount: 233,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    location: '제주 성산일출봉'
  },
  {
    id: '2',
    date: '2025.2.28',
    title: '홍대 거리',
    content: '홍대 거리의 밤은 정말 생동감 넘쳐요. 거리 공연도 보고 맛있는 거리 음식도 먹고, 젊음의 에너지를 느낄 수 있었습니다. 다음에 또 가고 싶어요!',
    interactionDetail: 'ISFP로부터 가장 많은 좋아요을 받았어요',
    likesCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    location: '홍대 거리'
  },
  {
    id: '3',
    date: '2025.1.15',
    title: '전주 한옥마을',
    content: '전주 한옥마을의 전통적인 아름다움에 매료되었어요. 한옥의 지붕과 담장, 그리고 골목길을 걸으면서 한국의 전통 문화를 깊이 느낄 수 있었습니다.',
    interactionDetail: 'INFJ로부터 가장 많은 좋아요을 받았어요',
    likesCount: 189,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    location: '전주 한옥마을'
  },
  {
    id: '4',
    date: '2024.12.20',
    title: '부산 해운대',
    content: '겨울의 해운대는 여름과는 다른 매력이 있어요. 바다의 푸른색과 하늘의 맑음이 어우러져서 정말 아름다웠습니다. 해운대 맛집도 많이 돌아다녔어요.',
    interactionDetail: 'ENTP로부터 가장 많은 좋아요을 받았어요',
    likesCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    location: '부산 해운대'
  }
]; 