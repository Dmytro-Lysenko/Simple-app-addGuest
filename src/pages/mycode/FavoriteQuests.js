import { useContext } from "react";
import FavoriteGuestContext from "../../store/favoriteQuest-context";
import QuestsLists from "../../components/quests/QuestsList";

const FavoriteQuests = (props) => {
  const favoritesGuestCtx = useContext(FavoriteGuestContext);

  let content;

  if (favoritesGuestCtx.totalFavoritesGuest === 0) {
    content = <p>You got no favorites guest</p>;
  } else {
    content = <QuestsLists quests={favoritesGuestCtx.favoritesGuest} />;
  }

  return (
    <section>
      <h1>My favorites guest</h1>
      {content}
    </section>
  );
};

export default FavoriteQuests;
