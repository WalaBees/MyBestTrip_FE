import React from 'react';
import styled from 'styled-components';
import InquiryForm from '../../components/mypage/InquiryForm';

interface InquiryData {
  category: string;
  title: string;
  content: string;
}

const InquiryPage: React.FC = () => {
  const handleSubmit = (data: InquiryData) => {
    console.log('문의 제출:', data);
    // TODO: API 호출 로직 추가
  };

  const handleCancel = () => {
    console.log('문의 취소');
    // TODO: 취소 로직 추가 (예: 이전 페이지로 이동)
  };

  return (
    <PageContainer>
      <PageTitle>문의</PageTitle>
      <Divider></Divider>
      <InquiryForm 
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  // border: 1px solid blue;
`;

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 32px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;


export default InquiryPage; 