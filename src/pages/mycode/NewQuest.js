import { useNavigate } from "react-router-dom";
import NewQuestForm from "../../components/quests/NewQuestForm";
import Card from "../../components/ui/Card";

const Newquest = (props) => {
  const navigate = useNavigate();

  const newGustHandler = (newGuestData) => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/guests.json",
      {
        method: "POST",
        body: JSON.stringify(newGuestData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      navigate('/', { replace: true })
    });;
  };

  return (
    <Card>
      <NewQuestForm onAddGuest={newGustHandler} />
    </Card>
  );
};

export default Newquest;
