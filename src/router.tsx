import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import DestinationInfo from "./pages/DestinationInfo";
import BalanceGamePage from "./pages/BalanceGamePage";
import ReversePage from "./pages/ReversePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "destination-info",
        element: <DestinationInfo />,
      },
      {
        path: "mypage/*",
        element: <MyPage />,
      },
      {
        path: "/balance-game",
        element: <BalanceGamePage />,
      },
      {
        path: "/reverse",
        element: <ReversePage />,
      },
    ],
  },
]);

export default router;
