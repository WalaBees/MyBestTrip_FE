import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TagBadge from './TagBadge';
import MenuItem from './MenuItem';

interface UserProfile {
  nickname: string;
  introduction: string;
  mbti: string;
  tripCount: number;
  reviewCount: number;
  profileImage: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 임시 사용자 데이터
  const userProfile: UserProfile = {
    nickname: '김한동',
    introduction: '자연을 사랑하는 여행가',
    mbti: 'ISFP',
    tripCount: 1,
    reviewCount: 3,
    profileImage: 'https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=김한동'
  };

  const menuItems = [
    { path: '/mypage/profile', label: '프로필 정보', icon: '👤' },
    { path: '/mypage/favorites', label: '즐겨찾기', icon: '❤️' },
    { path: '/mypage/reviews', label: '여행지 후기', icon: '📝' },
    { path: '/mypage/trips', label: '이전 여행', icon: '✈️' },
    { path: '/mypage/inquiry', label: '문의', icon: '❓' }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfileImage src={userProfile.profileImage} alt="프로필 이미지" />
        <ProfileChangeButton>프로필 사진 변경하기</ProfileChangeButton>
      </ProfileSection>
      
      <UserInfoSection>
        <Nickname>{userProfile.nickname}</Nickname>
        <Introduction>{userProfile.introduction}</Introduction>
        <TagContainer>
          <TagBadge label={userProfile.mbti} />
          <TagBadge label={`여행 ${userProfile.tripCount}`} />
          <TagBadge label={`리뷰 ${userProfile.reviewCount}`} />
        </TagContainer>
      </UserInfoSection>

      <MenuSection>
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.path || (location.pathname === '/mypage' && item.path === '/mypage/profile')}
            onClick={() => handleMenuClick(item.path)}
          />
        ))}
      </MenuSection>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  width: 320px;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0f0f0;
`;

const ProfileChangeButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
  }
`;

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Nickname = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Introduction = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0;
  text-align: center;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const MenuSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default Sidebar; 