import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/home")}>My Best Trip</Logo>
      <Menus>
        <Menu onClick={() => navigate("/home")}>홈</Menu>
        <Menu onClick={() => navigate("/destination-info")}>여행지 정보</Menu>
        <Menu onClick={() => navigate("/balance-game")}>
          여행지 밸런스 게임
        </Menu>
        <Menu>반전여행지</Menu>
        <Menu onClick={() => navigate("/mypage")}>마이페이지</Menu>
      </Menus>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid ${lightTheme.colors.gray.light};
  background-color: white;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin-left: 82px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 82px;
`;

const Menu = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: black;
  margin-left: 32px;
  cursor: pointer;
`;
