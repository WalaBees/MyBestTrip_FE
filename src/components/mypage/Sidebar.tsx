import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import noteEditIcon from '../../assets/note-edit-outline.svg';
import airplaneIcon from '../../assets/airplane.svg';
import progressQuestionIcon from '../../assets/progress-question.svg';
import TagBadge from './TagBadge';
import MenuItem from './MenuItem';
import { lightTheme } from '../../styles/theme';

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
    profileImage: 'https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg'
  };

  const menuItems = [
    { path: '/mypage/profile', label: '프로필 정보', icon: <PersonOutlineIcon /> },
    { path: '/mypage/favorites', label: '즐겨찾기', icon: <FavoriteBorderIcon /> },
    { path: '/mypage/trips', label: '이전 여행', icon: <img src={airplaneIcon} alt="airplane" /> },
    { path: '/mypage/reviews', label: '여행지 후기', icon: <img src={noteEditIcon} alt="note edit" /> },
    { path: '/mypage/inquiry', label: '문의', icon: <img src={progressQuestionIcon} alt="question" /> }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfileImage src={userProfile.profileImage} alt="프로필 이미지" />
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
      <Divider></Divider>
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

export default Sidebar; 

const SidebarContainer = styled.aside`
  width: 260px;
  background-color: #ffffff;
  border-right: 1px solid ${lightTheme.colors.gray.light};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  // border: 1px solid blue;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  // border: 1px solid blue;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${lightTheme.colors.gray.light};
`;

const UserInfoSection = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightTheme.colors.gray.light};
  margin: 24px 0;
  margin-bottom: 42px;
  margin-top: 42px;
`;

const Nickname = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  margin-top: 6px;
`;

const Introduction = styled.p`
  font-size: 0.875rem;
  color: ${lightTheme.colors.gray.dark};
  margin: 0;
  text-align: center;
  margin-top: 6px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`;

const MenuSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

