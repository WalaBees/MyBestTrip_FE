export interface MbtiDestination {
  id: string;
  mbti: string;
  title: string;
  location: string;
  address: string;
  imageUrl: string;
  description: string;
}

export const mbtiDestinations: MbtiDestination[] = [
  {
    id: '1',
    mbti: 'ENFP',
    title: '북한산',
    location: '강원도특별자치도 고성군',
    address: '강원도특별자치도 고성군',
    imageUrl: 'https://images.unsplash.com/photo-1704961254037-bb105fe556bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'ENFP에게 추천하는 북한산의 아름다운 자연'
  },
  {
    id: '2',
    mbti: 'INFJ',
    title: '프랑스',
    location: '프랑스 파리',
    address: '프랑스 파리',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'INFJ에게 추천하는 프랑스의 문화와 예술'
  },
  {
    id: '3',
    mbti: 'ISTP',
    title: '치앙마이',
    location: '강원도특별자치도 고성군',
    address: '강원도특별자치도 고성군',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: 'ISTP에게 추천하는 치앙마이의 모험'
  },
  {
    id: '4',
    mbti: 'INTJ',
    title: '교토',
    location: '일본 교토',
    address: '일본 교토',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
    description: 'INTJ에게 추천하는 교토의 역사와 전통'
  },
  {
    id: '5',
    mbti: 'ENTP',
    title: '뉴욕',
    location: '미국 뉴욕',
    address: '미국 뉴욕',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
    description: 'ENTP에게 추천하는 뉴욕의 혁신과 도시'
  },
  {
    id: '6',
    mbti: 'ISFP',
    title: '발리',
    location: '인도네시아 발리',
    address: '인도네시아 발리',
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
    description: 'ISFP에게 추천하는 발리의 평화로운 자연'
  },
  {
    id: '7',
    mbti: 'ENFJ',
    title: '로마',
    location: '이탈리아 로마',
    address: '이탈리아 로마',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    description: 'ENFJ에게 추천하는 로마의 문화와 역사'
  },
  {
    id: '8',
    mbti: 'ISTJ',
    title: '스위스',
    location: '스위스 취리히',
    address: '스위스 취리히',
    imageUrl: 'https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=3134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'ISTJ에게 추천하는 스위스의 질서와 안정'
  },
  {
    id: '9',
    mbti: 'ENTJ',
    title: '런던',
    location: '영국 런던',
    address: '영국 런던',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
    description: 'ENTJ에게 추천하는 런던의 비즈니스와 문화'
  },
  {
    id: '10',
    mbti: 'INFP',
    title: '산토리니',
    location: '그리스 산토리니',
    address: '그리스 산토리니',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
    description: 'INFP에게 추천하는 산토리니의 로맨틱한 분위기'
  },
  {
    id: '11',
    mbti: 'ESTP',
    title: '두바이',
    location: '아랍에미리트 두바이',
    address: '아랍에미리트 두바이',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
    description: 'ESTP에게 추천하는 두바이의 모험과 스릴'
  },
  {
    id: '12',
    mbti: 'ESFJ',
    title: '제주도',
    location: '제주특별자치도',
    address: '제주특별자치도',
    imageUrl: 'https://images.unsplash.com/photo-1528493366314-e317cd98dd52?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'ESFJ에게 추천하는 제주도의 따뜻한 분위기'
  },
  {
    id: '13',
    mbti: 'INTP',
    title: '베를린',
    location: '독일 베를린',
    address: '독일 베를린',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=300&fit=crop',
    description: 'INTP에게 추천하는 베를린의 지적 분위기'
  },
  {
    id: '14',
    mbti: 'ESTJ',
    title: '싱가포르',
    location: '싱가포르',
    address: '싱가포르',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
    description: 'ESTJ에게 추천하는 싱가포르의 효율성과 질서'
  },
  {
    id: '15',
    mbti: 'ESFP',
    title: '리우데자네이루',
    location: '브라질 리우데자네이루',
    address: '브라질 리우데자네이루',
    imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop',
    description: 'ESFP에게 추천하는 리우의 활기찬 분위기'
  },
  {
    id: '16',
    mbti: 'ISFJ',
    title: '부산',
    location: '부산광역시',
    address: '부산광역시',
    imageUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
    description: 'ISFJ에게 추천하는 부산의 따뜻한 사람들'
  }
]; 