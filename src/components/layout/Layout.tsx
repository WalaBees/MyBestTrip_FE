// import { styled } from "@mui/material";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "#eee", padding: "1rem" }}>Header</header>
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
