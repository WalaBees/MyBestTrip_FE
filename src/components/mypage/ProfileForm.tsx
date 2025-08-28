import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface ProfileData {
  nickname: string;
  mbti: string;
  residence: string;
  introduction: string;
}

interface ProfileFormProps {
  initialData: ProfileData;
  onSave: (data: ProfileData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [profileImage, setProfileImage] = useState('https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg');

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const mbtiOptions = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContent>
        <ProfileImageSection>
          <LargeProfileImage src={profileImage} alt="프로필 이미지" />
          <ProfileChangeButton type="button">
            프로필 사진 변경하기
          </ProfileChangeButton>
        </ProfileImageSection>

        <FormFieldsSection>
          <FormField>
            <Label>닉네임</Label>
            <Input
              type="text"
              value={formData.nickname}
              onChange={(e) => handleInputChange('nickname', e.target.value)}
              placeholder="닉네임을 입력하세요"
            />
          </FormField>

          <FormField>
            <Label>MBTI</Label>
            <Select
              value={formData.mbti}
              onChange={(e) => handleInputChange('mbti', e.target.value)}
            >
              {mbtiOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormField>

          <FormField>
            <Label>거주지역</Label>
            <Input
              type="text"
              value={formData.residence}
              onChange={(e) => handleInputChange('residence', e.target.value)}
              placeholder="거주지역을 입력하세요"
            />
          </FormField>

          <FormField>
            <Label>한줄 자기소개</Label>
            <Input
              type="text"
              value={formData.introduction}
              onChange={(e) => handleInputChange('introduction', e.target.value)}
              placeholder="자기소개를 입력하세요"
            />
          </FormField>
        </FormFieldsSection>
      </FormContent>
      <SaveButton type="submit">
        저장
      </SaveButton>
    </FormContainer>
  );
};

export default ProfileForm; 

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  // border: 1px solid red;
  // margin-left: 52px;
  margin-top: 52px;
`;

const FormContent = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
`;

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  // border: 1px solid blue;
`;

const LargeProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${lightTheme.colors.gray.light};
`;

const ProfileChangeButton = styled.button`
  background: none;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${lightTheme.colors.gray.dark};
  cursor: pointer;
  transition: all 0.2s ease;
  height: 42px;
  margin-top: 12px;

  &:hover {
    background-color: ${lightTheme.colors.gray.light};
    border-color: #ccc;
  }
`;

const FormFieldsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  margin-left: 42px;
  // border: 1px solid green;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // border: 1px solid yellow;
  width: 360px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding-left: 0.75rem;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;
  height: 42px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
   border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  font-size: 0.875rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  height: 46px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SaveButton = styled.button`
  align-self: flex-end;
  background-color: ${lightTheme.colors.gray.light};
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 16px 42px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 12px;
  margin-right: 240px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
