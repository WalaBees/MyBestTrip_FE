import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/120x120/4A90E2/FFFFFF?text=김한동');

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

      <SaveButton type="submit">
        저장
      </SaveButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LargeProfileImage = styled.img`
  width: 120px;
  height: 120px;
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

const FormFieldsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.875rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SaveButton = styled.button`
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ProfileForm; 