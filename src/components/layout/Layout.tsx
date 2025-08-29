// import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Outlet /> {/* 여기에 현재 페이지 컴포넌트가 들어감 */}
      </main>
      <footer style={{ background: "#eee", padding: "1rem" }}>Footer</footer>
    </div>
  );
};

export default Layout;
