import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface InquiryData {
  category: string;
  title: string;
  content: string;
}

interface InquiryFormProps {
  initialData?: InquiryData;
  onSubmit: (data: InquiryData) => void;
  onCancel: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ 
  initialData = { category: '', title: '', content: '' }, 
  onSubmit, 
  onCancel 
}) => {
  const [formData, setFormData] = useState<InquiryData>(initialData);

  const handleInputChange = (field: keyof InquiryData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const categoryOptions = [
    '기술 지원',
    '계정 문의',
    '결제 문의',
    '버그 신고',
    '기타'
  ];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <Select
          value={formData.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
        >
          <option value="">문의 카테고리 선택</option>
          {categoryOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField>
        <Input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </FormField>

      <FormField>
        <TextArea
          value={formData.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
          placeholder="내용을 입력하세요"
          rows={8}
        />
      </FormField>

      <BottomSection>
      <FileSection>
        <FileButton type="button">
          📎 파일 첨부
        </FileButton>
        <FileNote>파일 첨부는 최대 5개 까지만 가능합니다.</FileNote>
      </FileSection>

      <ButtonSection>
        <CancelButton type="button" onClick={onCancel}>
          취소
        </CancelButton>
        <SubmitButton type="submit">
          등록
        </SubmitButton>
      </ButtonSection>
      </BottomSection>
    </FormContainer>
  );
};

export default InquiryForm; 

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 52px; 
//   border: 1px solid red;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 800px;
//   border: 1px solid red;
`;


const Input = styled.input`
  padding-left: 24px;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;
  height: 42px;
  
 &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding-left: 12px;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  height: 46px;
  width: 260px;

  &:focus {
    outline: none;
    border-color: ${lightTheme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s ease;
  min-height: 160px;
  padding-left: 24px;
  padding-top: 20px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FileButton = styled.button`
  align-self: flex-start;
  background: none;
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: ${lightTheme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${lightTheme.colors.backgroundLight};
    border-color: ${lightTheme.colors.border};
  }
`;

const FileNote = styled.div`
  font-size: 12px;
  color: ${lightTheme.colors.textSecondary};
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 12px;
`;

const CancelButton = styled.button`
  background-color: white;
  color: ${lightTheme.colors.textSecondary};
  border: 1px solid ${lightTheme.colors.border};
  border-radius: 8px;
  padding: 16px 42px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${lightTheme.colors.backgroundLight};
    border-color: ${lightTheme.colors.border};
  }
`;

const SubmitButton = styled.button`
  background-color: ${lightTheme.colors.backgroundLight};
  color: ${lightTheme.colors.textSecondary};
  border: none;
  border-radius: 8px;
  padding: 16px 42px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-right: 100px;

  &:hover {
    background-color: ${lightTheme.colors.backgroundExtraLight};
  }
`;
