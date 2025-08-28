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
      <Divider></Divider>
      <ProfileForm 
        initialData={profileData}
        onSave={handleSave}
      />
    </ProfilePageContainer>
  );
};

export default ProfilePage; 


const ProfilePageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  // border: 1px solid red;
`;

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;
