import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import DestinationInfo from "./pages/DestinationInfo";
import BalanceGamePage from "./pages/BalanceGamePage";
import LoginPage from "./pages/loginPage/LoginPage";
import { AuthProvider } from "./auth/AuthContext"; // Provider
import RequireAuth from "./auth/RequireAuth"; // 가드
import ReversePage from "./pages/ReversePage";
import { TravelBalanceGame } from "./pages/travel-balance";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { path: "home/*", element: <Home /> }, // 공개
      { path: "destination-info", element: <DestinationInfo /> }, // 공개

      // 보호 라우트 묶음
      {
        element: <RequireAuth />,
        children: [
          { path: "mypage/*", element: <MyPage /> },
          { path: "balance-game", element: <TravelBalanceGame /> },
          // { path: "balance-game", element: <BalanceGamePage /> },
          { path: "reverse", element: <ReversePage /> },
        ],
      },

      //  로그인 페이지 (항상 접근 가능)
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Home from "./pages/Home";
// import MyPage from "./pages/MyPage";
// import DestinationInfo from "./pages/DestinationInfo";
// import BalanceGamePage from "./pages/BalanceGamePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "destination-info",
//         element: <DestinationInfo />,
//       },
//       {
//         path: "mypage/*",
//         element: <MyPage />,
//       },
//       {
//         path: "/balance-game",
//         element: <BalanceGamePage />,
//       },
//     ],
//   },
// ]);

// export default router;
