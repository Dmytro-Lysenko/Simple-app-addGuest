import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import BottomLayout from "./components/layout/BottomLayout";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import Allquests from "./pages/mycode/AllQuests";
import FavoriteQuests from "./pages/mycode/FavoriteQuests";
import Newquest from "./pages/mycode/NewQuest";
import NewMeetupPage from "./pages/NewMeetups";
import { FavoriteGuestContextProvider } from "./store/favoriteQuest-context";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact></Route>
          <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Layout>
      <FavoriteGuestContextProvider>
        <BottomLayout>
          <Routes>
            <Route path="/" element={<Allquests />} exact></Route>
            <Route path="/new-quest" element={<Newquest />}></Route>
            <Route
              path="/favorites-quests"
              element={<FavoriteQuests />}
            ></Route>
          </Routes>
        </BottomLayout>
      </FavoriteGuestContextProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
