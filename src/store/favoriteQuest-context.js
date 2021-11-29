import { createContext, useState } from "react";

const FavoriteGuestContext = createContext({
  favoritesGuest: [],
  totalFavoritesGuest: 0,
  addFavoriteGuest: (favoriteItemGuest) => {},
  removeFavoriteGuest: (guestId) => {},
  itemsIsFavoriteGuest: (guestId) => {},
});

export const FavoriteGuestContextProvider = (props) => {
  const [userFavoritesGuest, setUserFavoritesGuest] = useState([]);

  const addFavoriteGuestHandler = (FavoritesGuest) => {
    setUserFavoritesGuest((prevUserFavorites) => {
      return prevUserFavorites.concat(FavoritesGuest);
    });
  };

  const removeFavoriteGuestHandler = (guestId) => {
    setUserFavoritesGuest((prevUserFavoritesGuest) => {
      return prevUserFavoritesGuest.filter((guest) => guest.id !== guestId);
    });
  };

  const itemsGuestIsFavoriteHandler = (guestId) => {
    return userFavoritesGuest.some((guest) => guest.id === guestId);
  };

  const context = {
    favoritesGuest: userFavoritesGuest,
    totalFavoritesGuest: userFavoritesGuest.length,
    addFavoriteGuest: addFavoriteGuestHandler,
    removeFavoriteGuest: removeFavoriteGuestHandler,
    itemsIsFavoriteGuest: itemsGuestIsFavoriteHandler,
  };

  return (
    <FavoriteGuestContext.Provider value={context}>
      {props.children}
    </FavoriteGuestContext.Provider>
  );
};

export default FavoriteGuestContext;
