import { useState, useEffect } from "react";

import QuestsLists from "../../components/quests/QuestsList";
import classes from "./AllQuests.module.css";

const DUMMY_QUESTS = [
  {
    id: "s1",
    name: "Vladimir",
    age: "64",
    proffesion: "front-end developer",
    img: "https://static.dw.com/image/55979245_303.jpg",
  },
  {
    id: "s2",
    name: "Donald",
    age: "61",
    proffesion: "front-end developer",
    img: "https://static.dw.com/image/49626233_303.jpg",
  },
  {
    id: "s3",
    name: "Barak",
    age: "64",
    proffesion: "front-end developer",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
  },
];

const Allquests = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedGuests, setLoadedGuests] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/guests.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const guests = [];

        for (const k in data) {
          const guest = {
            id: k,
            ...data[k],
          };
          guests.push(guest);
        }
        setIsLoading(false);
        setLoadedGuests(guests);
      });
  }, [setIsLoading, setLoadedGuests]);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section className={classes.container}>
      <h1 className={classes.content}>All quests</h1>
      <QuestsLists quests={loadedGuests} />
    </section>
  );
};

export default Allquests;
