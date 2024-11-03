import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Derslerim from "./components/derslerim";
import History from "./components/derslerim/tarih";
import IlkCag from "./components/derslerim/tarih/ilkcag";
import OrtaCag from "./components/derslerim/tarih/ortacag";
import Renesans from "./components/derslerim/tarih/ronesans";

import Header from "./components/header";
import Home from "./components/home";
import QuizComponent from "./components/quiz";
import ResultPage from "./components/quiz/ ResultPage";
import StudentQuizPage from "./components/quiz/StudentQuizPage";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/giris",
      element: <Login />,
    },
    {
      path: "/kayıt",
      element: <Register />,
    },
    {
      path: "/anasayfa",
      element: <Home />,
    },
    {
      path: "/quiz",
      element: <QuizComponent />,
    },
    {
      path: "/resultpage",
      element: <ResultPage />,
    },
    {
      path: "/quizlerim",
      element: <StudentQuizPage />,
    },
    {
      path: "/derslerim",
      element: <Derslerim />,
    },
    {
      path: "/tarih",
      element: <History />,
    },
    {
      path: "/ilkcag",
      element: <IlkCag />,
    },
    {
      path: "/ortacag",
      element: <OrtaCag />,
    },
    {
      path: "/ronesans",
      element: <Renesans />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
