import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileForm from '../../components/mypage/ProfileForm';

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    nickname: '김한동',
    mbti: 'ISFP',
    residence: '대한민국, 포항',
    introduction: '자연을 사랑하는 여행가'
  });

  const handleSave = (data: typeof profileData) => {
    console.log('프로필 저장:', data);
    setProfileData(data);
    // TODO: API 호출 로직 추가
  };

  return (
    <ProfilePageContainer>
      <PageTitle>프로필 정보</PageTitle>
      <ProfileForm 
        initialData={profileData}
        onSave={handleSave}
      />
    </ProfilePageContainer>
  );
};

const ProfilePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
`;

export default ProfilePage; 