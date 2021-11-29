import { useContext } from "react";
import FavoriteGuestContext from "../../store/favoriteQuest-context";

import Card from "../ui/Card";
import classes from "./QuestItem.module.css";

const QuestItem = (props) => {
  const favGuestCtx = useContext(FavoriteGuestContext);
  console.log(favGuestCtx);

  const itemsGuestIsFavorite = favGuestCtx.itemsIsFavoriteGuest(props.id);
  console.log(props.id);

  const toogleFavoritesGuestStatusHandler = () => {
    if (itemsGuestIsFavorite) {
      favGuestCtx.removeFavoriteGuest(props.id);
      console.log("something here");
    } else {
      favGuestCtx.addFavoriteGuest({
        id: props.id,
        age: props.age,
        photo: props.photo,
        profession: props.profession,
      });

      // console.log("something in guest");
    }
    // console.log(favGuestCtx);
  };

  return (
    <li className={classes.container}>
      <Card>
        <div>
          <h2>{props.name}</h2>
          <h1>{props.age}</h1>
        </div>
        <div className={classes.image}>
          <img src={props.photo} alt={props.name} />
        </div>
        <div>
          <h3>{props.profession}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoritesGuestStatusHandler}>
            {itemsGuestIsFavorite
              ? "Remove from favorite guest"
              : "to favorite guest!!"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default QuestItem;
