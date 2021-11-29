import QuestItem from "./QuestItem";
import classes from "./QuestLists.module.css";

const QuestsLists = (props) => {
  return (
    <ul className={classes.container}>
      {props.quests.map((guest) => (
        <QuestItem
          key={guest.id}
          id={guest.id}
          name={guest.name}
          age={guest.age}
          profession={guest.profession}
          photo={guest.photo}
        />
      ))}
    </ul>
  );
};

export default QuestsLists;
